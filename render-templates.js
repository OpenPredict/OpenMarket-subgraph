const fs = require('fs-extra');
const mustache = require('mustache');

module.exports = function(callback) {
  (async () => {
    const chainId = await web3.eth.net.getId();
    const templateData = {
      network: {
        [1]: 'mainnet',
        [4]: 'rinkeby',
        [77]: 'poa-sokol',
        [100]: 'xdai',
        [80001]: 'mumbai',
      }[chainId] || 'development',
      nuancedBinaryTemplateId: {
        [1]: 6,
      }[chainId] || 5,
    };

    for(const contractName of [
      'FPMMDeterministicFactory',
      'FixedProductMarketMaker',
      'ConditionalTokens',
      'ERC20Detailed',
      'UniswapV2Factory',
      'UniswapV2Pair',
      'WETH9',
      'DAI',
      'USDC',
      'USDT',
    ]) {
      const { abi } = fs.readJsonSync(`build/contracts/${contractName}.json`);
      fs.outputJsonSync(`abis/${contractName}.json`, abi, { spaces: 2 });

      const C = artifacts.require(contractName);
      try {
        const { address } = C;
        templateData[contractName] = {
          address,
          addressLowerCase: address.toLowerCase(),
          startBlock: (
            await web3.eth.getTransactionReceipt(C.transactionHash)
          ).blockNumber,
        };
      } catch (e) {}
    }

    for (const templatedFileDesc of [
      ['subgraph', 'yaml'],
      ['src/utils/token', 'ts'],
      ['src/FPMMDeterministicFactoryMapping', 'ts'],
      ['src/ConditionalTokensMapping', 'ts'],
      ['src/UniswapV2PairMapping', 'ts'],
    ]) {
      const template = fs.readFileSync(`${templatedFileDesc[0]}.template.${templatedFileDesc[1]}`).toString();
      fs.writeFileSync(
        `${templatedFileDesc[0]}.${templatedFileDesc[1]}`,
        mustache.render(template, templateData),
      );
    }
  })().then(() => callback(), callback);
};
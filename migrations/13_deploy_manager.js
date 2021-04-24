module.exports = function(deployer, network, accounts) {
    contractAddresses = [];
    contractAddresses['WETH9']                    = '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab';
    contractAddresses['ConditionalTokens']        = '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24';
    contractAddresses['FPMMDeterministicFactory'] = '0xCfEB869F69431e42cdB54A4F4f105C19C080A601';
    contractAddresses['UniswapV2Factory']         = '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B';
    contractAddresses['DAI']                      = '0xC89Ce4735882C9F0f0FE26686c53074E09B0D550';
    contractAddresses['USDC']                     = '0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb';
    contractAddresses['USDT']                     = '0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7';

    deployer.deploy(artifacts.require('ConditionalTokensManager'),
        accounts[0],
        contractAddresses['FPMMDeterministicFactory'],
        contractAddresses['ConditionalTokens'],
        contractAddresses['USDC']
    );
  };
  
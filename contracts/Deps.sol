pragma solidity ^0.5.11;

import { WETH9 } from "canonical-weth/contracts/WETH9.sol";

import { ConditionalTokens } from "@gnosis.pm/conditional-tokens-contracts/contracts/ConditionalTokens.sol";

import { FixedProductMarketMakerFactory } from "@gnosis.pm/conditional-tokens-market-makers/contracts/FixedProductMarketMakerFactory.sol";
import { FPMMDeterministicFactory } from "@gnosis.pm/conditional-tokens-market-makers/contracts/FPMMDeterministicFactory.sol";
import { FixedProductMarketMaker } from "@gnosis.pm/conditional-tokens-market-makers/contracts/FixedProductMarketMaker.sol";

import { ERC20Detailed } from "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

import { UniswapV2Factory } from "@uniswap/v2-core/contracts/UniswapV2Factory.sol";
import { UniswapV2Pair } from "@uniswap/v2-core/contracts/UniswapV2Pair.sol";

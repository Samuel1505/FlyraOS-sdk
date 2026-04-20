import { makeContractCall, uintCV } from '@stacks/transactions';
import { FLYRA_DEPLOYER, DEFAULT_NETWORK } from '../constants';

export const provideLiquidity = (amount: bigint, senderKey: string, network = DEFAULT_NETWORK) => {
  return makeContractCall({
    contractAddress: FLYRA_DEPLOYER,
    contractName: 'liquidity-pool',
    functionName: 'provide-liquidity',
    functionArgs: [uintCV(amount)],
    senderKey,
    network,
  });
};

export class LiquidityPool {
  async getPoolBalance() {
    return 0n;
  }

  provide(amount: bigint, senderKey: string) {
    return provideLiquidity(amount, senderKey);
  }
}

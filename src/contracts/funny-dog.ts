import { makeContractCall, standardPrincipalCV } from '@stacks/transactions';
import { FLYRA_DEPLOYER, DEFAULT_NETWORK } from '../constants';

export const mintFunnyDog = (recipient: string, senderKey: string, network = DEFAULT_NETWORK) => {
  return makeContractCall({
    contractAddress: FLYRA_DEPLOYER,
    contractName: 'funny-dog',
    functionName: 'mint',
    functionArgs: [standardPrincipalCV(recipient)],
    senderKey,
    network,
  });
};

export class FunnyDog {
  async getBalance(address: string) {
    // Implementation for calling read-only function would go here
    return 0n;
  }

  mint(recipient: string, senderKey: string) {
    return mintFunnyDog(recipient, senderKey);
  }
}

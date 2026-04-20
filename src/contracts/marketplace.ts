import { makeContractCall, uintCV } from '@stacks/transactions';
import { FLYRA_DEPLOYER, DEFAULT_NETWORK } from '../constants';

export const listAsset = (assetId: number, price: bigint, senderKey: string, network = DEFAULT_NETWORK) => {
  return makeContractCall({
    contractAddress: FLYRA_DEPLOYER,
    contractName: 'marketplace',
    functionName: 'list-asset',
    functionArgs: [uintCV(assetId), uintCV(price)],
    senderKey,
    network,
  });
};

export class Marketplace {
  async getListings() {
    return [];
  }

  list(assetId: number, price: bigint, senderKey: string) {
    return listAsset(assetId, price, senderKey);
  }
}

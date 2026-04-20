import { fetchNonce as stacksFetchNonce } from '@stacks/transactions';
import type { StacksNetwork } from '@stacks/network';

export async function fetchNonce(address: string, network: StacksNetwork): Promise<bigint> {
  const nonce = await stacksFetchNonce({ address, network });
  return nonce;
}

export function formatAddress(address: string): string {
  return address.trim();
}

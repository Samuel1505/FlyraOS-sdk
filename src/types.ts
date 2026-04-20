import type { StacksNetwork } from '@stacks/network';

export interface SDKOptions {
  network?: StacksNetwork;
  privateKey?: string;
}

export interface ContractCallResponse {
  txId: string;
  status: 'pending' | 'success' | 'error';
}

export * from './constants';
export * from './types';
export * from './utils';
export * from './contracts/funny-dog';
export * from './contracts/liquidity-pool';
export * from './contracts/marketplace';

import { FunnyDog } from './contracts/funny-dog';
import { LiquidityPool } from './contracts/liquidity-pool';
import { Marketplace } from './contracts/marketplace';
import type { SDKOptions } from './types';
import { DEFAULT_NETWORK } from './constants';

export class FlyraOS {
  public funnyDog: FunnyDog;
  public liquidityPool: LiquidityPool;
  public marketplace: Marketplace;
  public network;

  constructor(options: SDKOptions = {}) {
    this.network = options.network || DEFAULT_NETWORK;
    this.funnyDog = new FunnyDog();
    this.liquidityPool = new LiquidityPool();
    this.marketplace = new Marketplace();
  }
}

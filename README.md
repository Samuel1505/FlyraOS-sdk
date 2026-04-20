# FlyraOS SDK

A professional TypeScript SDK for interacting with the FlyraOS ecosystem on the Stacks blockchain. This SDK provides typed wrappers for core contracts including tokens, liquidity pools, and marketplaces.

## Features

- **Typed Contract Wrappers**: Easily call smart contract functions with full TypeScript support.
- **Dual Build Support**: Compatible with both CommonJS and ESM projects.
- **Stacks v7 Ready**: Built using the latest `@stacks/network` and `@stacks/transactions` APIs.
- **Integrated Utilities**: Built-in helpers for nonce management and network configuration.

## Installation

```bash
npm install flyraos-sdk
```

## Quick Start

### Initialize the SDK

```typescript
import { FlyraOS, STACKS_MAINNET } from 'flyraos-sdk';

const sdk = new FlyraOS({
  network: STACKS_MAINNET
});
```

### Interact with Contracts

#### Funny Dog Token (NFT)
```typescript
// Mint a new Funny Dog NFT
const mintTx = await sdk.funnyDog.mint('SP123...', 'your-private-key');

// Get balance
const balance = await sdk.funnyDog.getBalance('SP123...');
```

#### Liquidity Pool
```typescript
// Provide liquidity
const lpTx = await sdk.liquidityPool.provide(1000000n, 'your-private-key');
```

#### Marketplace
```typescript
// List an asset
const listTx = await sdk.marketplace.list(1, 500n, 'your-private-key');
```

## Advanced Usage

### Custom Network
You can pass a custom Stacks network configuration during initialization:

```typescript
import { FlyraOS } from 'flyraos-sdk';
import { StacksTestnet } from '@stacks/network';

const sdk = new FlyraOS({
  network: new StacksTestnet()
});
```

### Standalone Helpers
If you don't want to use the full `FlyraOS` class, you can import specific transaction builders directly:

```typescript
import { mintFunnyDog } from 'flyraos-sdk';

const tx = await mintFunnyDog('SP123...', 'your-private-key');
```

## Development

### Prerequisites
- Node.js 18+
- npm

### Build the SDK
```bash
npm run build
```

### Run Tests
```bash
npm test
```

## License

ISC

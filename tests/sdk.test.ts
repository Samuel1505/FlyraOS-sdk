import { describe, it, expect } from 'vitest';
import { FlyraOS } from '../src/index';

describe('FlyraOS SDK', () => {
  it('should initialize with default settings', () => {
    const sdk = new FlyraOS();
    expect(sdk).toBeDefined();
    expect(sdk.funnyDog).toBeDefined();
  });
});

import * as fromEffect from './effect.actions';

describe('loadEffects', () => {
  it('should return an action', () => {
    expect(fromEffect.loadEffects().type).toBe('[Effect] Load Effects');
  });
});

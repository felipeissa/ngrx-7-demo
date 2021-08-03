import * as fromEffect from './effect.actions';

describe('effectActions', () => {
  it('should return a no response action', () => {
    expect(fromEffect.noResponseAction().type).toBe('[Effect] No response action');
  });
  it('should return a multiple response input action', () => {
    expect(fromEffect.multipleResponseInputAction().type).toBe('[Effect] Multiple response input action');
  });
  it('should return a multiple response output 1 action', () => {
    expect(fromEffect.multipleResponseOutput1Action().type).toBe('[Effect] Multiple response output 1 action');
  });
  it('should return a multiple response output 2 action', () => {
    expect(fromEffect.multipleResponseOutput2Action().type).toBe('[Effect] Multiple response output 2 action');
  });
  it('should return a untreated error action', () => {
    expect(fromEffect.untreatedErrorAction().type).toBe('[Effect] Untreated error action');
  });
  it('should return a treated error action', () => {
    expect(fromEffect.treatedErrorAction().type).toBe('[Effect] Treated error action');
  });
  it('should return a threated error output action', () => {
    expect(fromEffect.treatedErrorActionOutput().type).toBe('[Effect] Treated error action output');
  });
});

import * as fromCurrent from './current.actions';

describe('current actions', () => {
  it('should return decrement action', () => {
    expect(fromCurrent.decrement().type).toBe('[Current] Decrement');
  });
  it('should return increment action', () => {
    expect(fromCurrent.increment().type).toBe('[Current] Increment');
  });
  it('should return incrementBy action', () => {
    expect(fromCurrent.incrementBy({ increment: 0 }).type).toBe('[Current] IncrementBy');
  });
  it('should return reset action', () => {
    expect(fromCurrent.reset().type).toBe('[Current] Reset');
  });
  it('should return set value action', () => {
    expect(fromCurrent.setValue({ value: 0 }).type).toBe('[Current] SetValue');
  });
});

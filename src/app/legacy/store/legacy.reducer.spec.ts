import { Decrement, Increment, IncrementBy, Reset, SetValue } from './legacy.actions';
import { legacyReducer, initialState } from './legacy.reducer';

describe('Legacy Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = legacyReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('increment action', () => {
    it('should increase store counter', () => {
      const action = new Increment();

      const result = legacyReducer(initialState, action);

      expect(result.counter).toBe(initialState.counter + 1);
    });
  });

  describe('decrement action', () => {
    it('should decrement store counter', () => {
      const action = new Decrement();

      const result = legacyReducer(initialState, action);

      expect(result.counter).toBe(initialState.counter - 1);
    });
  });

  describe('decrement action', () => {
    it('should decrement store counter', () => {
      const action = new Reset();
      const state = {
        ...initialState,
        counter: 10
      };

      const result = legacyReducer(state, action);

      expect(result).toBe(initialState);
    });
  });

  describe('increment by action', () => {
    it('should set counter to 0', () => {
      const action = new IncrementBy({
        increment: 10
      });

      const result = legacyReducer(initialState, action);

      expect(result.counter).toBe(0);
    });
  });

  describe('set value', () => {
    it('should set counter to configured value', () => {
      const value = 10;
      const action = new SetValue({
        value
      });

      const result = legacyReducer(initialState, action);

      expect(result.counter).toBe(value);
    });
  });
});

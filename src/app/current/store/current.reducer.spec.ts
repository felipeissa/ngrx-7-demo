import { decrement, increment, incrementBy, reset, setValue } from './current.actions';
import { currentReducer, initialState } from './current.reducer';

describe('Current Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('increment action', () => {
    it('should increase store counter', () => {
      const action = increment();

      const result = currentReducer(initialState, action);

      expect(result.counter).toBe(initialState.counter + 1);
    });
  });

  describe('decrement action', () => {
    it('should decrement store counter', () => {
      const action = decrement();

      const result = currentReducer(initialState, action);

      expect(result.counter).toBe(initialState.counter - 1);
    });
  });

  describe('decrement action', () => {
    it('should decrement store counter', () => {
      const action = reset();
      const state = {
        ...initialState,
        counter: 10
      };

      const result = currentReducer(state, action);

      expect(result).toBe(initialState);
    });
  });

  describe('increment by action', () => {
    it('should set counter to 0', () => {
      const action = incrementBy({
        increment: 10
      });

      const result = currentReducer(initialState, action);

      expect(result.counter).toBe(0);
    });
  });

  describe('set value', () => {
    it('should set counter to configured value', () => {
      const value = 10;
      const action = setValue({
        value
      });

      const result = currentReducer(initialState, action);

      expect(result.counter).toBe(value);
    });
  });
});

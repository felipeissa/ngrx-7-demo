import { effectReducer, initialState } from './effect.reducer';

describe('Effect Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = effectReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

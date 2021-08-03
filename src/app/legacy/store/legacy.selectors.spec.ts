import { initialState } from "./legacy.reducer";
import { getCounter } from "./legacy.selectors";

describe('Legacy Selectors', () => {
  it('should select the feature state', () => {
    const state = {
      legacy: initialState
    }
    const value = getCounter(state);

    expect(value).toBe(initialState.counter);
  });
});

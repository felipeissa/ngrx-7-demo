import { currentFeatureKey, initialState } from "./current.reducer";
import { getCurrentCount } from "./current.selectors";


describe('Current Selectors', () => {
  it('should select the feature state', () => {
    const state = {
      [currentFeatureKey]: initialState
    }
    const value = getCurrentCount(state);

    expect(value).toBe(initialState.counter);
  });
});

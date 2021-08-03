import * as fromCurrent from './current.actions';

describe('loadCurrents', () => {
  it('should return an action', () => {
    expect(fromCurrent.loadCurrents().type).toBe('[Current] Load Currents');
  });
});

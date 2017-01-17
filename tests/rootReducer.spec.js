import { expect } from 'chai';

import { buildState } from './helpers';
import * as constants from '../src/redux/constants';
import rootReducer from '../src/redux/reducers/rootReducer';

describe('Root Reducer', () => {

  const initialState = buildState();

  it('Returns initial/previous state by default', () => {
    const unknownAction = { type: 'unknown' };
    const newState = rootReducer(initialState, unknownAction);
    expect(newState).to.deep.equal(initialState);
  });

  it('Sets selectedAnimal with SELECT_ANIMAL action', () => {
    const selectAnimalAction = {
      type: constants.SELECT_ANIMAL,
      animal: initialState.cats[0],
    };
    const newState = rootReducer(initialState, selectAnimalAction);
    const expectedState = Object.assign(
      initialState,
      { selectedAnimal: initialState.cats[0] }
    );
    expect(newState).to.deep.equal(expectedState);
  })

});

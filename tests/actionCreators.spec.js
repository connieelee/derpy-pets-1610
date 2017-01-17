import { expect } from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import * as constants from '../src/redux/constants';
import * as actionCreators from '../src/redux/action-creators';

describe('Action Creator Specs', () => {
  const sampleAnimal = {
    id: 1,
    species: 'cat',
    name: 'Nyan Cat',
    gender: 'M',
    description: 'Grey',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
  };

  describe('Synchronous Action Creators', () => {
    // Easy P-Z! Pure functions take input -> returns object
    it('selectAnimal returns correct object', () => {

      expect(actionCreators.selectAnimal(sampleAnimal))
        .to.deep.equal({
          type: constants.SELECT_ANIMAL,
          animal: sampleAnimal,
        });
    });
  });

  describe('Asynchronous Action Creators', () => {
    // Approach: make sure that the right action are dispatched
    // Setup: need a fake store to see what actions fire
    let store;
    const middleware = [thunk];
    const mockStore = configureStore(middleware);

    afterEach(() => { nock.cleanAll(); });

    describe('getAnimalById', () => {
      let scope;

      // start with a clean state for each spec
      beforeEach(() => {
        store = mockStore({ selectedAnimal: null });
        scope = nock('http://localhost:80')
          .get('/api/animal/1');
      });

      it('dispatches correct actions on success', () => {
        scope.reply(200, sampleAnimal);
        const expectedActions = [
          { type: constants.SELECT_ANIMAL, animal: sampleAnimal },
        ];

        return store
          .dispatch(actionCreators.getAnimalById(1))
          .then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions);
          });
      });

      it('dispatches correct actions on failure', () => {
        const sampleError = new Error('Not Found Error');
        scope.replyWithError(sampleError);
        const expectedActions = [
          { type: constants.SET_ERROR, error: sampleError },
        ];

        return store
          .dispatch(actionCreators.getAnimalById(1))
          .then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions);
          });
      });
    });

  });
});







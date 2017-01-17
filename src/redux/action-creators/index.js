import axios from 'axios';
import { SELECT_ANIMAL, SET_ERROR } from '../constants';

// fake async action I'm not using in the app right now,
// but imagine that I am (so I can make a test spec for it)
export function getAnimalById(id) {
  return (dispatch) => axios.get(`/api/animal/${id}`)
    .then(res => {
      dispatch(selectAnimal(res.data));
    })
    .catch(err => {
      dispatch(setError(err));
    });
}

// some other fake thing for demonstration purposes
export function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
};


export function selectAnimal(animal) {
  return {
    type: SELECT_ANIMAL,
    animal
  };
};


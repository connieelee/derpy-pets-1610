import { cats, dogs } from '../../../public/data';
import { SELECT_ANIMAL } from '../constants';

const initialState = {
  cats,
  dogs,
  selectedAnimal: null,
};

function rootReducer(prevState = initialState, action) {
  const nextState = { ...prevState };

  switch(action.type) {
    case SELECT_ANIMAL:
      nextState.selectedAnimal = action.animal;
      return nextState;
    default:
      return nextState;
  }
}

export default rootReducer;

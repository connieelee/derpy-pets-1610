import { SELECT_ANIMAL } from '../constants';

export function selectAnimal(animal) {
  return {
    type: SELECT_ANIMAL,
    animal
  };
};

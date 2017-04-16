import {DELETE_RECIPE} from '../constants';

export const deleteRecipe = (id) =>
  ({
    type   : DELETE_RECIPE,
    payload: id
  });
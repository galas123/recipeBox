import {SAVE_NEW_RECIPE} from '../constants';

export const saveNewRecipe = (recipe) =>
  ({
    type   : SAVE_NEW_RECIPE,
    payload: recipe
  });
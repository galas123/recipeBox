import {SHOW_RECIPE} from '../constants';

export const showRecipe = (recipe) =>
  ({
    type   : SHOW_RECIPE,
    payload: recipe
  });

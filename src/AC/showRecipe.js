import {SHOW_RECIPE} from '../constants';

export const showRecipe = (recipeId) =>
  ({
    type   : SHOW_RECIPE,
    payload: recipeId
  });

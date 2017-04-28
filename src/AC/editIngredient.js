import {EDIT_INGREDIENT} from '../constants';

export const editIngredient = (ingredient, index, recipeId) =>
  ({
    type   : EDIT_INGREDIENT,
    payload: {
      ingredient:ingredient,
      index:index,
      recipeId: recipeId
    }
  });
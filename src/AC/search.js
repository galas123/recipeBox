import {SEARCH} from '../constants';

export const addRecipe = (content) =>
  ({
    type   : SEARCH,
    payload: content
  });
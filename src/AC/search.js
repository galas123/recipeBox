import {SEARCH} from '../constants';

export const search = (content) =>
  ({
    type   : SEARCH,
    payload: content
  });
import {SHOW_RECIPE, DELETE_RECIPE, SEARCH} from '../constants';

import {Map, List}  from 'immutable';

const defaultState = Map({
  recipes: List([{
    id         : 1234,
    name       : 'cottage cheese cookies',
    ingredients: List(['cottage cheese', 'sugar', 'butter', '1 egg', 'vanilla'])
  },
    {
      id         : 1235,
      name       : 'pilaf',
      ingredients: List(['carrots', 'onions', 'rice', 'beef meet', 'shafran'])
    },
    {
      id         : 1236,
      name       : 'paella',
      ingredients: List(['carrots', 'onions', 'rice', 'beef meet', 'shafran'])
    },
    {
      id         : 1237,
      name       : 'sharlotka',
      ingredients: List(['flavour', '3 apples', '4 eggs', 'butter', 'sugar'])
    }
  ]),
  selectedRecipe:null,
  filterTerm:''
});

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {

    case SHOW_RECIPE:
      return state.setIn(['selectedResipe'], payload);

    case DELETE_RECIPE:
      const deletingRecipe=state.get('recipes').findIndex((item,index)=>(item.id===payload));
      return state.deleteIn(['recipes',deletingRecipe]);

    case SEARCH:
      return state.setIn(['filterTerm'], payload);
  };
  
  return state;
}
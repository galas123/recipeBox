import {SHOW_RECIPE, DELETE_RECIPE, SEARCH, EDIT_INGREDIENT} from '../constants';

import {Map, List}  from 'immutable';

const defaultState = Map({
  recipes       : List([
    {
      id         : 1234,
      name       : 'cottage cheese cookies',
      ingredients: List(['cottage cheese', 'sugar', 'butter', '1 egg', 'vanilla', ''])
    },
    {
      id         : 1235,
      name       : 'pilaf',
      ingredients: List(['carrots', 'onions', 'rice', 'beef meet', 'shafran', ''])
    },
    {
      id         : 1236,
      name       : 'paella',
      ingredients: List(['carrots', 'onions', 'rice', 'beef meet', 'shafran', ''])
    },
    {
      id         : 1237,
      name       : 'sharlotka',
      ingredients: List(['flavour', '3 apples', '4 eggs', 'butter', 'sugar', ''])
    }
  ]),
  selectedRecipeId: null,
  filterTerm    : ''
});

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {

    case SHOW_RECIPE:
      return state.setIn(['selectedRecipeId'], payload);

    case DELETE_RECIPE:
      const deletingRecipe = state.get('recipes').findIndex((item, index)=>(item.id === payload));
      return state.deleteIn(['recipes', deletingRecipe]);

    case SEARCH:
      return state.setIn(['filterTerm'], payload);

    case EDIT_INGREDIENT:
      const recipeIndex = state.get('recipes').findIndex((item, index)=>(item.id === payload.recipeId));
      const newState    = state.updateIn([
          'recipes',
          recipeIndex
        ],
        recipe=> {
          const rec = {...recipe, ingredients: recipe.ingredients.set(payload.index, payload.ingredient)};

          if (payload.index===rec.ingredients.size-1 && payload.ingredient.trim()!==''){
            const newIngredients=rec.ingredients.push('');
            console.log('добавлен последний ингредиент',newIngredients );
            return ({...rec, ingredients:newIngredients})
          }

          const affectedIngredientsLength=rec.ingredients.size;
           if (rec.ingredients.get(affectedIngredientsLength-1).trim()==='' &&
            rec.ingredients.get(affectedIngredientsLength-2).trim()===''){
             console.log('нулевые строки');
            return ({...rec, ingredients: rec.ingredients.pop()});
          }

          if (payload.ingredient.trim()==='' && payload.index!==affectedIngredientsLength-1){
            console.log('пустой ингредиент');
            return ({...rec, ingredients:rec.ingredients.splice(payload.index,1)});
          }

          return (rec);
        }
      );
      return newState;
  }
  return state;
}
import {SHOW_RECIPE, DELETE_RECIPE, SEARCH, EDIT_INGREDIENT, SAVE_NEW_RECIPE} from '../constants';

import {Map, List}  from 'immutable';
console.log('local storage',localStorage.getItem('recipes'));
const newRecipes=JSON.parse(localStorage.getItem('recipes')).map((recipe)=>
  ({... recipe, ingredients: List(recipe.ingredients)})
);
const defaultState = Map({
  recipes       : List(newRecipes),
  selectedRecipeId: null,
  filterTerm    : ''
});

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SHOW_RECIPE:
      if (state.get('selectedRecipeId')===payload){
        return state.setIn(['selectedRecipeId'], null);
      }
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

    case SAVE_NEW_RECIPE:
      const {newRecipeName, newRecipeIngredients}=payload;
      const newID=Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            console.log('генерация ID', newID);
      const recipesWithNewRecipe = state.get('recipes').push(
        {
          id         : newID,
          name       : newRecipeName,
          ingredients: List(newRecipeIngredients.split(',')).push('')
        })
      console.log('state', recipesWithNewRecipe);
      return state.set('recipes',recipesWithNewRecipe);
  }
  return state;
}
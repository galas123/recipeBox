import {createSelector} from 'reselect'

const recipesSelector = state => state.recipes.get('recipes');
const filterSelector  = state => state.recipes.get('filterTerm');
const selectedRecipeIdSelector  = state => state.recipes.get('selectedRecipeId');

export const visibleRecipesSelector = createSelector(
  recipesSelector,
  filterSelector,
  (recipes, filter) => recipes.filter(
    recipe => {
      console.log (recipe);
     return recipe.name.indexOf(filter) > -1 || recipe.ingredients.join(' ').indexOf(filter) > -1
    
    }
  )
);

export const selectedRecipeSelector = createSelector(
  recipesSelector,
  selectedRecipeIdSelector,
  (recipes, selectedRecipeId) => recipes.find(
    recipe => {
      return recipe.id===selectedRecipeId

    }
  )
);



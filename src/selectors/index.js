import {createSelector} from 'reselect'

const recipesSelector = state => state.recipes.get('recipes');
const filterSelector  = state => state.recipes.get('filterTerm');

export const visibleRecipesSelector = createSelector(
  recipesSelector,
  filterSelector,
  (recipes, filter) => recipes.filter(
    recipe => recipe.name.indexOf(filter) > -1 || recipe.ingredients.join(' ').indexOf(filter) > -1
  )
);

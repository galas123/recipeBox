import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import CollapsedRecipeContainer from './containers/collapsedRecipeContainer';
import ExpandedRecipeContainer from './containers/expandRecipeContainer';
import AddRecipeContainer from './containers/addRecipeContainer';
import SearchBarContainer from './containers/searchBarContainer';

import {visibleRecipesSelector, selectedRecipeSelector} from './selectors';

class App extends Component {
  render() {
    const {recipes, selectedRecipe}=this.props;
    const listRecipes = recipes.map(recipe => {
        if (selectedRecipe && selectedRecipe.id === recipe.id) {
          return <ExpandedRecipeContainer recipe={recipe} key={recipe.name}/>
        }
        return <CollapsedRecipeContainer recipe={recipe} key={recipe.name}/>
      }
      )
    return (
      <div className="recipes-frame">
        <h1 className="caption">Recipe Box </h1>
        <AddRecipeContainer/>
        <SearchBarContainer/>
        <div className="box">
          {listRecipes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=> ({
    recipes: visibleRecipesSelector(state),
    selectedRecipe: selectedRecipeSelector(state)
  });

export default connect(mapStateToProps, null)(App);

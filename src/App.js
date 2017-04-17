import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

import CollapsedRecipe from './components/CollapsedRecipe';
import ExpandedRecipe from './components/ExpandRecipe';
import AddRecipe from './components/AddRecipe';
import SearchBar from './components/SearchBar';

import {visibleRecipesSelector} from './selectors';

class App extends Component {
  render() {
    const {recipes, selectedRecipe}=this.props;
    const listRecipes = recipes.map((recipe) => {
        if (selectedRecipe && selectedRecipe.id === recipe.id) {
          return <ExpandedRecipe recipe={selectedRecipe} key={recipe.name}/>
        }
        return <CollapsedRecipe recipe={recipe} key={recipe.name}/>
      }
      )
    return (
      <div className="recipes-frame">
        <h1 className="caption">Recipe Box </h1>
        <AddRecipe/>
        <SearchBar/>
        <div className="box">
          {listRecipes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=> ({
    recipes: visibleRecipesSelector(state),
    selectedRecipe: state.recipes.get('selectedResipe')
  });

export default connect(mapStateToProps, null)(App);

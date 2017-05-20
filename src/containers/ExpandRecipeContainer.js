import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {deleteRecipe} from '../AC/deleteRecipe';
import {editIngredient} from '../AC/editIngredient';
import {showRecipe} from '../AC/showRecipe';

import ExpandedRecipe from '../components/ExpandRecipe';

import '../App.css';

class ExpandedRecipeContainer extends Component {

  render() {
    const {recipe}=this.props;
    return (
      <ExpandedRecipe recipe={recipe} editIngredient={this.editIngredient} clickTrash={this.clickTrash} clickRecipe={this.clickRecipe} />
    );
  }

  clickTrash=()=>{
    const {recipe, deleteRecipe}=this.props;
    deleteRecipe(recipe.id);
  };

  editIngredient = index=> ev => {
    const {recipe, editIngredient}=this.props;
    ev.preventDefault();
    editIngredient(ev.target.value, index, recipe.id);
  };

  clickRecipe=(ev)=>{
    const {showRecipe, recipe}=this.props;
    ev.preventDefault();
    showRecipe(recipe.id);
  }
}

export default connect(null, {deleteRecipe, editIngredient, showRecipe})(ExpandedRecipeContainer);
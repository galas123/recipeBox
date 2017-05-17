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
    const listIngredients=recipe.ingredients.map((item,index)=>
      (<input className="ingredient" key={index} value={item} onChange={this.editIngredient(index)}/>));
    return (
      <ExpandedRecipe recipe={recipe} listIngredients={listIngredients} clickTrash={this.clickTrash} clickRecipe={this.clickRecipe} />
    );
  }

  clickTrash=(ev)=>{
    const {recipe, deleteRecipe}=this.props;
    ev.preventDefault();
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
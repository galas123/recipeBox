import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import Trash from 'react-icons/lib/fa/trash';

import {deleteRecipe} from '../AC/deleteRecipe';
import {editIngredient} from '../AC/editIngredient';

import '../App.css';

class ExpandedRecipe extends Component {
  
  render() {
    const {recipe}=this.props;
    console.log('render',recipe.ingredients);
    const listIngredients=recipe.ingredients.map((item,index)=>
      (<input className="ingredient" key={index} value={item} onChange={this.editIngredient(index)}/>));
    return (
      <div>
      <input className="expanded-recipe-name" value={recipe.name}/>
        <button className="trash-wrapper">
        <Trash className="trash" onClick={this.clickTrash}/>
       </button>
        <div className="ingredients-frame">
          {listIngredients}
        </div>
        </div>
    );
  }

  clickTrash=(ev)=>{
    const {recipe, deleteRecipe}=this.props;
    ev.preventDefault();
    deleteRecipe(recipe.id);
  }

  editIngredient = index=> ev => {
    const {recipe, editIngredient}=this.props;
    ev.preventDefault();
    editIngredient(ev.target.value, index, recipe.id);
    
  }
}

export default connect(null, {deleteRecipe, editIngredient})(ExpandedRecipe);
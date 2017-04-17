import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import Trash from 'react-icons/lib/fa/trash';

import {deleteRecipe} from '../AC/deleteRecipe';

import '../App.css';

class ExpandedRecipe extends Component {
  render() {
    const {recipe}=this.props;
    console.log(recipe.ingredients);
    const listIngredients=recipe.ingredients.map((item)=>
      (<input className="ingredient" key={item} value={item}/>));
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
}

export default connect(null, {deleteRecipe})(ExpandedRecipe);
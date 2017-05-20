import React, {
  Component
} from 'react';

import Button from '../components/Button';

import Trash from 'react-icons/lib/fa/trash';

import '../App.css';

export default class ExpandedRecipe extends Component {
  render() {
    const {recipe, clickTrash, clickRecipe, editIngredient}=this.props;
    const listIngredients=recipe.ingredients.map((item,index)=>
      (<input className="ingredient" key={index} value={item} onChange={editIngredient(index)}/>));
    return (
      <div>
        <input className="expand-recipe__name" value={recipe.name} onClick={clickRecipe}/>
        <Button className="expand-recipe__trash" clickFunction={clickTrash} >
          <Trash className="trash-icon" />
        </Button>
          
        <div className="expand-recipe__ingredients">
          {listIngredients}
        </div>
      </div>
    );
  }
}

import React, {
  Component
} from 'react';

import Trash from 'react-icons/lib/fa/trash';

import '../App.css';

export default class ExpandedRecipe extends Component {
  render() {
    const {recipe, listIngredients, clickTrash, clickRecipe}=this.props;
    return (
      <div>
        <input className="expanded-recipe-name" value={recipe.name} onClick={clickRecipe}/>
        <button className="trash-wrapper">
          <Trash className="trash" onClick={clickTrash}/>
        </button>
        <div className="ingredients-frame">
          {listIngredients}
        </div>
      </div>
    );
  }
}

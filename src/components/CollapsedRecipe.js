import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {showRecipe} from '../AC/showRecipe';

class CollapsedRecipe extends Component {
  render() {
    const {recipe}=this.props;
    return (
      <div>
      <button className="collapsed-recipe" onClick={this.onClick}>
        {recipe.name}
      </button>
        </div>
    );
  }

  onClick = (ev) => {
    const {showRecipe, recipe}=this.props;
    ev.preventDefault();
    showRecipe(recipe);
  };
  
}


export default connect(null, {showRecipe})(CollapsedRecipe);


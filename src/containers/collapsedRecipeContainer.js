import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {showRecipe} from '../AC/showRecipe';

import CollapsedRecipe from '../components/CollapsedRecipe';

class CollapsedRecipeContainer extends Component {
  render() {
    const {recipe}=this.props;
    return (
        <CollapsedRecipe recipe={recipe} onClick={this.onClick}/>
    );
  }

  onClick = (ev) => {
    const {showRecipe, recipe}=this.props;
    showRecipe(recipe.id);
  };

}

export default connect(null, {showRecipe})(CollapsedRecipeContainer);
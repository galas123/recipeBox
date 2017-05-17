import React, {
  Component
} from 'react';

export default class CollapsedRecipe extends Component {
  render() {
    const {recipe, onClick}=this.props;
    return (
      <button className="collapsed-recipe" onClick={onClick}>
        {recipe.name}
      </button>
    );
  }
}


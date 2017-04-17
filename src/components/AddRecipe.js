import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {addRecipe} from '../AC/addRecipe';

class AddRecipe extends Component {
  render() {
    return (
        <button className="add-recipe-button" onClick={this.onClick}>
          add
        </button>
    );
  }

  onClick = (ev) => {
    const {addRecipe}=this.props;
    ev.preventDefault();
    addRecipe();
  };

}


export default connect(null, {addRecipe})(AddRecipe);
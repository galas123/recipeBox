import React, {
  Component
} from 'react';

import {connect} from 'react-redux';

import {addRecipe} from '../AC/addRecipe';
import {saveNewRecipe} from '../AC/saveNewRecipe';

import AddRecipe from '../components/AddRecipe';

class AddRecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return(
      <AddRecipe 
        addButtonClick={this.addButtonClick} 
        clickSubmit={this.clickSubmit} 
        clickCancel={this.clickCancel}
        isOpen={this.state.isOpen}/>
    )
  }
  addButtonClick = (ev) => {
  ev.preventDefault();
  this.setState({isOpen: true});
};

clickSubmit = (newRecipeName, newRecipeIngredients)=> {
  const {saveNewRecipe}=this.props;

  if (newRecipeName.trim().length && newRecipeIngredients.trim().length) {
    saveNewRecipe(
      {
        newRecipeName,
        newRecipeIngredients
      });
  }
  this.setState({isOpen: false});
}

clickCancel=ev => {
  ev.preventDefault();
  this.setState({isOpen: false});
}
}


export default connect(null, {addRecipe, saveNewRecipe})(AddRecipeContainer);
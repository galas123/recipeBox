import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {addRecipe} from '../AC/addRecipe';
import {saveNewRecipe} from '../AC/saveNewRecipe';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalWindow: false
    };
  }

  render() {
    const modalWin = this.state.modalWindow ?
      <div className="add-recipe-window">
        <h2>Модальное окно</h2>
        <div className="add-recipe-content">
          <h3 className="added-recipe-caption">Создание нового рецепта</h3>
          <input className="added-recipe-name" placeholder="Введите название рецепта" ref="newRecipeName"/>
          <input className="added-recipe-ingredients" placeholder="Введите ингредиенты через запятую" ref="newRecipeIngredients"/>
          <div className="added-recipe-buttons" >
          <button className="added-recipe-btn" onClick={this.clickSubmit}>ok</button>
          <button className="added-recipe-btn" onClick={this.clickCancel}>отмена</button>
            </div>
        </div>
      </div> : null;
    return (
      <div>
        <button className="add-recipe-button" onClick={this.onClick}>
          add
        </button>
        {modalWin}
      </div>
    );
  }

  onClick = (ev) => {
    ev.preventDefault();
    this.setState({modalWindow: true});
  };

  clickSubmit = (ev) => {
    const {saveNewRecipe}=this.props;
    ev.preventDefault();
    const newRecipeName        = this.refs.newRecipeName.value;
    const newRecipeIngredients = this.refs.newRecipeIngredients.value;
    if (newRecipeName.trim().length && newRecipeIngredients.trim().length) {
      saveNewRecipe(
        {
          newRecipeName,
          newRecipeIngredients
        });
    }
    this.setState({modalWindow: false});
  }

  clickCancel=(ev) => {
    ev.preventDefault();
    this.setState({modalWindow: false});
  }
}


export default connect(null, {addRecipe, saveNewRecipe})(AddRecipe);
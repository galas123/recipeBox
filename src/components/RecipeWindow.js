import React, {
  Component
} from 'react';

export default class RecipeWindow extends Component {
  render() {
    const {clickCancel}=this.props;

    return (
      <div className="add-recipe-window">
        <div className="add-recipe-content">
          <h3 className="added-recipe-caption">Создание нового рецепта</h3>
          <input
            className="added-recipe-name"
            placeholder="Введите название рецепта"
            ref="newRecipeName"
          />
          <input className="added-recipe-ingredients" placeholder="Введите ингредиенты через запятую"
                 ref="newRecipeIngredients"/>
          <div className="added-recipe-buttons">
            <button className="added-recipe-btn" onClick={this.clickSubmitProvider}>ok</button>
            <button className="added-recipe-btn" onClick={clickCancel}>отмена</button>
          </div>
        </div>
      </div>
  )
  }

  clickSubmitProvider=(ev)=>{
    ev.preventDefault();
    const {clickSubmit}=this.props;
    const newRecipeName        = this.refs.newRecipeName.value;
    const newRecipeIngredients = this.refs.newRecipeIngredients.value;
    clickSubmit(newRecipeName, newRecipeIngredients);
  }
}

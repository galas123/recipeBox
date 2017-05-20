import React, {
  Component
} from 'react';

import Button from '../components/Button';

export default class RecipeWindow extends Component {
  render() {
    const {clickCancel}=this.props;

    return (
      <div className="recipe-window">
        <div className="recipe-window__content">
          <h3 className="recipe-window__caption">Создание нового рецепта</h3>
          <input
            className="recipe-window__name-input"
            placeholder="Введите название рецепта"
            ref="newRecipeName"
          />
          <input className="recipe-window__ingredients-input" placeholder="Введите ингредиенты через запятую"
                 ref="newRecipeIngredients"/>
          <div className="recipe-window__buttons">
            <Button className="recipe-window__btn" clickFunction={this.clickSubmitProvider} text="OK"/>
            <Button className="recipe-window__btn" clickFunction={clickCancel} text="ОТМЕНА"/>
          </div>
        </div>
      </div>
  )
  }

  clickSubmitProvider=()=>{
    const {clickSubmit}=this.props;
    const newRecipeName        = this.refs.newRecipeName.value;
    const newRecipeIngredients = this.refs.newRecipeIngredients.value;
    clickSubmit(newRecipeName, newRecipeIngredients);
  }
}

import React, {
  Component
} from 'react';

import Button from '../components/Button';
import RecipeWindow from '../components/RecipeWindow';

export default class AddRecipe extends Component {
  render() {
    const {clickSubmit, clickCancel, addButtonClick, isOpen}=this.props;

    const modalWin = isOpen ? <RecipeWindow clickCancel={clickCancel} clickSubmit={clickSubmit}/>:null;
    return (
      <div>
        <Button className="add-recipe__button" clickFunction={addButtonClick} text="add"/>
        {modalWin}
      </div>
    );
  }
}
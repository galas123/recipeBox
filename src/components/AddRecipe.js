import React, {
  Component
} from 'react';

import RecipeWindow from '../components/RecipeWindow';

export default class AddRecipe extends Component {
  render() {
    const {clickSubmit, clickCancel, addButtonClick, isOpen}=this.props;

    const modalWin = isOpen ? <RecipeWindow clickCancel={clickCancel} clickSubmit={clickSubmit}/>:null;
    return (
      <div>
        <button className="add-recipe-button" onClick={addButtonClick}>
          add
        </button>
        {modalWin}
      </div>
    );
  }
}
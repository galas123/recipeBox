import React, {
  Component
} from 'react';
import Button from '../components/Button';

export default class CollapsedRecipe extends Component {
  render() {
    const {recipe, onClick}=this.props;
    return (
      <Button className="collapsed-recipe__button" text={recipe.name} clickFunction={onClick}/>
    );
  }
}


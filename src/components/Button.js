import React, {
  Component
} from 'react';

export default class Button extends Component {
  render() {
    const {text, className, children}=this.props;
    return (
        <button className={className} onClick={this.onClick}>
          {children||text}
        </button>
    );
  }
  onClick = (ev) => {
    const {clickFunction}=this.props;
    ev.preventDefault();
    clickFunction&&clickFunction();

  };
}
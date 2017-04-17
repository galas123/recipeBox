import React, {
  Component
} from 'react';
import {connect} from 'react-redux';

import {search} from '../AC/search';

class SearchBar extends Component {
  render() {
    return (
      <input className="search" type="search" placeholder="search.." onChange="this.onChange"/>
    );
  }

  onChange = (ev) => {
    const content=ev.target.value;
    console.log('content', content);
    const {search}=this.props;
    ev.preventDefault();
    search(content);
  };

}


export default connect(null, {search})(SearchBar);
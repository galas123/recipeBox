import React, {
  Component
} from 'react';
import Search from 'react-icons/lib/fa/search';

import {connect} from 'react-redux';

import {search} from '../AC/search';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <Search className="search"/>
      <input className="search-bar" type="search" placeholder="search.." onChange={this.onChange}/>
        </div>
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
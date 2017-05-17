import React, {
  Component
} from 'react';

import Search from 'react-icons/lib/fa/search';

import {connect} from 'react-redux';

import {search} from '../AC/search';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {
  render() {
    return (
      <SearchBar onChange={this.onChange}/>
    );
  }

  onChange = (ev) => {
    const content=ev.target.value;
    const {search}=this.props;
    ev.preventDefault();
    search(content);
  };

}


export default connect(null, {search})(SearchBarContainer);
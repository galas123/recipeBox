import React, {
  Component
} from 'react';

import Search from 'react-icons/lib/fa/search';

export default class SearchBar extends Component {
  render() {
    const {onChange}=this.props;
    return <div className="search-wrapper">
      <Search className="search"/>
      <input className="search-bar" type="search" placeholder="search.." onChange={onChange}/>
    </div>;
  }
}

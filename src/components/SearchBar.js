import React, {
  Component
} from 'react';

import Search from 'react-icons/lib/fa/search';

export default class SearchBar extends Component {
  render() {
    const {onChange}=this.props;
    return <div className="search-bar__wrapper">
      <Search className="search-bar__icon search"/>
      <input className="search-bar__input" type="search" placeholder="search.." onChange={onChange}/>
    </div>;
  }
}

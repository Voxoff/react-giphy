import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
        this.props.searchFunction(event.target.value)
  }

  render() {
    return( <input type="text" placeholder="Search.." id="search" className="search" 
      onChange={this.handleUpdate} />
      )
  }
}

export default SearchBar;

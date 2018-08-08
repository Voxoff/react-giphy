import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.term}
        placeholder="Search.."
        id="search"
        className="search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;

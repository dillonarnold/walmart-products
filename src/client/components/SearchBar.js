import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  state = {
    searchString: ''
  };

  handleChange = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  render() {
    return (
      <TextField
        id="search"
        label="Search"
        value={this.state.searchString}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }
}

export default SearchBar;

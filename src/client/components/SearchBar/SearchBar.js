import React, { Component } from 'react';
import { func } from 'react-proptypes';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { searchProducts } from '../../actions/index';

class SearchBar extends Component {
  state = {
    searchString: ''
  };

  static propTypes = {
    searchProducts: func
  };

  static defaultProps = {
    searchProducts: () => {}
  };

  // Used for onEnter on the search text field
  handleTextFieldKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        // Make API call for search query
        this.props.searchProducts(this.state.searchString);
        break;
      default:
        break;
    }
  };

  handleChange = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  render() {
    return (
      <TextField
        id="searchField"
        fullWidth
        label="Search"
        value={this.state.searchString}
        onChange={this.handleChange}
        onKeyDown={this.handleTextFieldKeyDown}
        margin="normal"
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchProducts: query => dispatch(searchProducts(query))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);

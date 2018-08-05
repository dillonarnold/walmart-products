import React, { Component } from 'react';
import { func } from 'react-proptypes';
import TextField from '@material-ui/core/TextField';

/**
 * A search bar that takes a keyword and makes a call to a function upon hitting enter.
 *
 * @version 1.0.0
 * @author Dillon Arnold
 */
class SearchBar extends Component {
  state = {
    searchString: ''
  };

  static propTypes = {
    /** Function called upon hitting enter in the text field that takes a string parameter*/
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

export default SearchBar;

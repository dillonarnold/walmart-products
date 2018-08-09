import React, { Component } from 'react';
import {bool, func, number} from 'react-proptypes';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

/**
 * A search bar that takes a keyword and makes a call to a function upon hitting enter.
 *
 * @version 1.1.0
 * @author Dillon Arnold
 */
class SearchBar extends Component {
  state = {
    searchString: '',
    hasSearched: false,
  };

  // TODO starting to get a lot of props, consider moving to a single object containing them
  static propTypes = {
    /** Function called upon hitting enter in the text field that takes a string parameter*/
    searchProducts: func,
    /** Clears the search results */
    clearSearch: func,
    /** Current page of products */
    currentPage: number.isRequired,
    /** Total number of products returned from query */
    totalResults: number.isRequired,
    /** Used for pagination, gets the next page of products */
    getNextPage: func.isRequired,
    /** Used for pagination, gets the previous page of products */
    getPreviousPage: func.isRequired,
    /** Total number of pages of products */
    totalPages: number.isRequired,
    /** Indicates if we are fetching products */
    loading: bool
  };

  static defaultProps = {
    searchProducts: () => {},
    clearSearch: () => {}
  };

  // Used for onEnter on the search text field
  handleTextFieldKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        if (this.state.searchString.length === 0) return;
        // Used to show if no search results are found
        this.setState({hasSearched: true});
        // Clear current results
        this.props.clearSearch();
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
    const {totalResults, currentPage, totalPages, getNextPage, getPreviousPage, loading} = this.props;
    return (
      <div>
        <TextField
          id="searchField"
          fullWidth
          label="Search"
          value={this.state.searchString}
          onChange={this.handleChange}
          onKeyDown={this.handleTextFieldKeyDown}
          margin="normal"
        />
        {
          // Should clean this up into a function
          totalResults !== 0 ? (
          <Grid container justify="center" spacing={24}>
            <Grid item md={12}>
              Total Search Results: {totalResults}
            </Grid>
            <Grid item md={2}>
              <IconButton disabled={currentPage === 1} variant="contained" color="primary" onClick={() => getPreviousPage(this.state.searchString)}>
                <Icon>arrow_back</Icon>
              </IconButton>
            </Grid>
            <Grid item md={2}>
              {currentPage} of {totalPages} pages
            </Grid>
            <Grid item md={2}>
              <IconButton disabled={currentPage === totalPages} variant="contained" color="primary" onClick={() => getNextPage(this.state.searchString)}>
                <Icon>arrow_forward</Icon>
              </IconButton>
            </Grid>
          </Grid>
        ) : this.state.hasSearched && !loading && 'No Results Found'
        }
      </div>
    );
  }
}

export default SearchBar;

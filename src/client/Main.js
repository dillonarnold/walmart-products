import React from 'react';
import {arrayOf, func, number, shape, string, bool} from 'react-proptypes';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { SearchBar, SearchResults } from './components';
import { getPreviousPage, getNextPage, searchProducts, clearSearch } from './actions';

const propTypes = {
  /** Function called upon hitting enter in the text field */
  searchProducts: func,
  /** Array of products */
  products: arrayOf(shape({
    /** Id of the product */
    itemId: number,
    /** Name of the product */
    name: string,
    /** The medium image src of the product */
    mediumImage: string
  })),
  /** Indicates if we are fetching products */
  loading: bool,
  /** Total number of products from search */
  totalResults: number,
  /** Current page of products */
  currentPage: number,
  /** Used for pagination, gets the next page of products */
  getNextPage: func,
  /** Used for pagination, gets the previous page of products */
  getPreviousPage: func
};

const defaultProps = {
  searchProducts: () => {},
  products: [],
  loading: false,
  currentPage: 0,
  totalResults: 0
};

const Main = ({products, searchProducts, loading, totalResults, currentPage, getNextPage, getPreviousPage}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container justify="center" spacing={24}>
        <Grid item md={8} xs={11}>
          <SearchBar searchProducts={searchProducts}/>
          <SearchResults
            products={products}
            loading={loading}
            currentPage={currentPage}
            totalResults={totalResults}
            totalPages={Math.ceil(totalResults / products.length)}
            getNextPage={getNextPage}
            getPreviousPage={getPreviousPage}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    totalResults: state.products.totalResults,
    currentPage: state.products.currentPage,
    loading: state.products.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchProducts: query => dispatch(searchProducts(query)),
    getNextPage: () => dispatch(getNextPage()),
    getPreviousPage: () => dispatch(getPreviousPage()),
    clearSearch: () => dispatch(clearSearch())
  };
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Main);

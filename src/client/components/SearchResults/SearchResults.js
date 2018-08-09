import React from 'react';
import {shape, string, number, arrayOf, bool, func} from 'react-proptypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Product from '../Product/Product';

// TODO starting to get a lot of props, consider moving to a single object containing them
const propTypes = {
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
  /** Current page of products */
  currentPage: number.isRequired,
  /** Total number of products returned from query */
  totalResults: number.isRequired,
  /** Used for pagination, gets the next page of products */
  getNextPage: func.isRequired,
  /** Used for pagination, gets the previous page of products */
  getPreviousPage: func.isRequired,
  /** Total number of pages of products */
  totalPages: number.isRequired
};

const defaultProps = {
  products: [],
  loading: false
};

/**
 * Takes an array of products and displays a list of Product components.
 *
 * @version 1.0.0
 * @author Dillon Arnold
 */
const SearchResults = ({products, loading, totalResults, currentPage, totalPages, getNextPage, getPreviousPage}) => (
  <div id="search-results">
  {
    loading ? (
      <Grid container justify="center" spacing={24}>
        <Grid item md={12}>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    ) : (
      <div>
        <Grid container justify="center" spacing={24}>
          <Grid item md={2}>
            <IconButton disabled={currentPage === 1} variant="contained" color="primary" onClick={getPreviousPage}>
              <Icon>arrow_back</Icon>
            </IconButton>
          </Grid>
          <Grid item md={2}>
            {currentPage}
          </Grid>
          <Grid item md={2}>
            <IconButton disabled={currentPage === totalPages} variant="contained" color="primary" onClick={getNextPage}>
              <Icon>arrow_forward</Icon>
            </IconButton>
          </Grid>
        </Grid>

        <div id="product-list">
          {
            products.map((product) =>
              <Product product={product} key={product.itemId}/>
            )
          }
        </div>
      </div>
    )
  }
  </div>
);

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
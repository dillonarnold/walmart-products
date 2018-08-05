import React from 'react';
import { shape, string, number, arrayOf, bool } from 'react-proptypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Product from '../Product/Product';

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
  loading: bool
};

const defaultProps = {
  products: []
};

/**
 * Takes an array of products and displays a list of Product components.
 *
 * @version 1.0.0
 * @author Dillon Arnold
 */
const SearchResults = ({products, loading}) => (
  <div id="search-results">
  {
    loading ? (
      <Grid container justify="center" spacing={24}>
        <Grid item md={12}>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    ) : (
      <div id="product-list">
        {
          products.map((product) =>
            <Product product={product} key={product.itemId}/>
          )
        }
      </div>
    )
  }
  </div>
);

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
import React from 'react';
import {arrayOf, func, number, shape, string, bool} from 'react-proptypes';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { SearchBar, SearchResults } from './components';
import {searchProducts} from './actions';

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
  loading: bool
};

const defaultProps = {
  searchProducts: () => {},
  products: [],
  loading: false
};

const Main = ({products, searchProducts, loading}) => (
  <React.Fragment>
    <CssBaseline />
    <Grid container justify="center" spacing={24}>
      <Grid item md={8} xs={11}>
        <SearchBar searchProducts={searchProducts}/>
        <SearchResults products={products} loading={loading}/>
      </Grid>
    </Grid>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    products: state.products.products,
    loading: state.products.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchProducts: query => dispatch(searchProducts(query))
  };
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React from 'react';
import {arrayOf, func, number, shape, string} from 'react-proptypes';
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
  }))
};

const defaultProps = {
  searchProducts: () => {},
  products: []
};

const Main = ({products, searchProducts}) => (
  <React.Fragment>
    <CssBaseline />
    <Grid container justify="center" spacing={24}>
      <Grid item md={8} xs={11}>
        <SearchBar searchProducts={searchProducts}/>
        <SearchResults products={products}/>
      </Grid>
    </Grid>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    products: state.products
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

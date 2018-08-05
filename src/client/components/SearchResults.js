import React from 'react';
import { shape, string, number, arrayOf } from 'react-proptypes';
import { connect } from 'react-redux';
import Product from './Product';

const propTypes = {
  products: arrayOf(shape({
    itemId: number,
    name: string,
    mediumImage: string
  }))
};

const defaultProps = {
  products: []
};

const SearchResults = ({products}) => (
    <div id="product-list">
      {
        products.map((product) =>
          <Product product={product} key={product.itemId}/>
        )
      }
    </div>
);

const mapStateToProps = state => {
  return {
    products: state.products
  };
};


SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default connect(mapStateToProps)(SearchResults);
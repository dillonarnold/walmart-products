import React from 'react';
import { shape, string, number, arrayOf } from 'react-proptypes';
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
  }))
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
const SearchResults = ({products}) => (
    <div id="product-list">
      {
        products.map((product) =>
          <Product product={product} key={product.itemId}/>
        )
      }
    </div>
);

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
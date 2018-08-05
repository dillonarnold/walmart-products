import { reduceProduct } from './index';

/**
 *  Reduces the properties of each product object in an array of products
 */
const mapProducts = products => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(item => {
    return reduceProduct(item);
  });
};

export default mapProducts;

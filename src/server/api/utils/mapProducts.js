import { reduceProduct } from './index';

const mapProducts = products => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(item => {
    return reduceProduct(item);
  });
};

export default mapProducts;

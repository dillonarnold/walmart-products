const reduceProduct = product => {
  return {
    itemId: product.itemId,
    name: product.name,
    mediumImage: product.mediumImage
  };
};

export default reduceProduct;

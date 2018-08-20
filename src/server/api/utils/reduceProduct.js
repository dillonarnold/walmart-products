/**
 *  Reduces the properties of a product object
 */
const reduceProduct = product => {
  return {
    itemId: product.itemId,
    name: product.name,
    mediumImage: product.mediumImage,
    imageEntities: sortImageEntities(product.imageEntities)
  };
};

const sortImageEntities = (images) => {
  return images.sort(compareImages);
};

const compareImages = (a, b) => {
  const secondary = 'SECONDARY';
  const primary = 'PRIMARY';

  if (a.entityType === secondary && b.entityType === secondary) {
    return 0;
  }
  else if (a.entityType === secondary && b.entityType === primary) {
    return 1;
  }
  else {
    return -1;
  }
};

export default reduceProduct;

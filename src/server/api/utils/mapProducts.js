const mapProducts = products => {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(item => {
    return {
      itemId: item.itemId,
      name: item.name,
      mediumImage: item.mediumImage
    };
  });
};

export default mapProducts;

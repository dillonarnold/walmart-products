const requestProducts = () => ({
  type: 'REQUEST_PRODUCTS'
});

export const addProducts = products => ({
  type: 'SET_PRODUCTS',
  products
});

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS'
});

export const searchProducts = query => {
  return dispatch => {
    //dispatch(requestProducts(query));
    return fetch(`/api/product/search?query=${query}`)
      .then(response => response.json())
      .then(json => dispatch(addProducts(json.products)));
  };
};

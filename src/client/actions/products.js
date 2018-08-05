export const addProducts = products => ({
  type: 'SET_PRODUCTS', // TODO define types as constants in a separate file
  products
});

// This is used to trigger the loading spinner
export const fetchingProducts = () => ({
  type: 'FETCHING_PRODUCTS'
});

// A thunk to trigger the loader and fetch the products
export const searchProducts = query => {
  return dispatch => {
    dispatch(fetchingProducts());
    return fetch(`/api/product/search?query=${query}`)
      .then(response => response.json())
      .then(json => dispatch(addProducts(json.products)));
  };
};

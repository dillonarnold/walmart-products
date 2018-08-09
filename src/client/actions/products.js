import store from '../store';

export const addProducts = products => ({
  type: 'SET_PRODUCTS', // TODO define types as constants in a separate file
  products
});

// This is used to trigger the loading spinner
export const fetchingProducts = () => ({
  type: 'FETCHING_PRODUCTS'
});

// Used for pagination
export const increasePage = () => ({
  type: 'INCREASE_PAGE'
});

export const decreasePage = () => ({
  type: 'DECREASE_PAGE'
});

export const clearSearch = () => ({
  type: 'CLEAR_PRODUCTS'
});

// Get the next pages search results
export const getNextPage = (query) => {
  /**
   * Questionable, but Dan Abramov says this is ok. Ideally this should use a selector.
   * https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
   */
  const currentPage = store.getState().products.currentPage;

  return dispatch => {
    if (currentPage !== 1) {
      dispatch(increasePage());
      searchProducts(query);
    }
  };
};

// Get the previous pages search results
export const getPreviousPage = (query) => {
  /**
   * Questionable, but Dan Abramov says this is ok. Ideally this should use a selector.
   * https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
   */
  const currentPage = store.getState().products.currentPage;

  return dispatch => {
    if (currentPage !== 1) {
      dispatch(decreasePage());
      searchProducts(query);
    }
  };
};

// A thunk to trigger the loader and fetch the products
export const searchProducts = (query) => {
  /**
   * Questionable, but Dan Abramov says this is ok. Ideally this should use a selector.
   * https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
   */
  const { currentPage, numProducts } = store.getState().products.numProducts;

  return dispatch => {
    /**
     * Map the page to a product index. Example:
     *
     * 10 products per page, so page 1's index would be 1
     * page 2's index would be 11
     */
    const index = (currentPage * numProducts) - (numProducts - 1);

    dispatch(fetchingProducts());
    return fetch(`/api/product/search?query=${query}&index=${index}`)
      .then(response => response.json())
      .then(json => dispatch(addProducts(json.products)));
  };
};

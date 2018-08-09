import store from '../store';

export const addProducts = products => ({
  type: 'SET_PRODUCTS', // TODO define types as constants in a separate file
  products
});

export const addPaginatedProducts = products => ({
  type: 'SET_PAGINATED_PRODUCTS',
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
  const {currentPage, numProducts, totalResults} = store.getState().products.currentPage;

  return dispatch => {
    if (currentPage !== Math.ceil(totalResults / numProducts)) {
      dispatch(increasePage());
      dispatch(searchProducts(query, true));
    }
  };
};

// Get the previous pages search results
export const getPreviousPage = (query) => {
  // See above comment
  const currentPage = store.getState().products.currentPage;

  return dispatch => {
    if (currentPage !== 1) {
      dispatch(decreasePage());
      dispatch(searchProducts(query, true));
    }
  };
};

// A thunk to trigger the loader and fetch the products
export const searchProducts = (query, justProducts = false) => {

  return dispatch => {

    /**
     * Questionable, but Dan Abramov says this is ok. Ideally this should use a selector.
     * https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
     */
    const { currentPage, numProducts } = store.getState().products;

    /**
     * Map the page to a product index. Example:
     *
     * 10 products per page, so page 1's index would be 1
     * page 2's index would be 11
     */
    const index = numProducts === 0 ? 1 : (currentPage * numProducts) - (numProducts - 1);

    dispatch(fetchingProducts());
    return fetch(`/api/product/search?query=${query}&start=${index}`)
      .then(response => response.json())
      .then(json =>  {
        // Do we only want the products, or do we also want the paginated data?
        if (justProducts) {
          dispatch(addPaginatedProducts(json.products));
        }
        else {
          dispatch(addProducts(json));
        }
      })
      .catch(e => {
        // TODO implement error handling for when HAPI API returns an error
      });
  };
};

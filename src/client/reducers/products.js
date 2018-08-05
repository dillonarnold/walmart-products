const products = (state = {products: [], loading: false}, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        products: [...action.products],
        loading: false
      };
    case 'FETCHING_PRODUCTS':
      return {
        ...state,
        loading: true
      };
    case 'CLEAR_PRODUCTS':
      return [];
    default:
      return state;
  }
};

export default products;

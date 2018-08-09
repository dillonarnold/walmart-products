const initialState = {
  products: [],
  totalResults: 0,
  numProducts: 0,
  currentPage: 1,
  loading: false
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return Object.assign({}, state, {
        ...state,
        products: [...action.products.products],
        totalResults: action.products.totalResults,
        numProducts: action.products.numProducts,
        loading: false
      });
    case 'SET_PAGINATED_PRODUCTS':
      return  Object.assign({}, state, {
        ...state,
        products: [...action.products],
        loading: false
      });
    case 'INCREASE_PAGE':
      return Object.assign({}, state, {
        ...state,
        currentPage: state.currentPage + 1
      });
    case 'DECREASE_PAGE':
      return Object.assign({}, state, {
        ...state,
        currentPage: state.currentPage - 1
      });
    case 'FETCHING_PRODUCTS':
      return Object.assign({}, state, {
        ...state,
        loading: true
      });
    case 'CLEAR_PRODUCTS':
      return initialState;
    default:
      return state;
  }
};

export default products;

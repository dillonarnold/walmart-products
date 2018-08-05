const products = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [...action.products];
    case 'CLEAR_PRODUCTS':
      return [];
    default:
      return state;
  }
};

export default products;
const initialState = {
  items: [],
  isLoaded: false,
};

const pizzasReducer = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      sortBy: action.paylod,
    };
  }
  return state;
};

export default pizzasReducer;

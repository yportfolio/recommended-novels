import * as dataActions from "../action/DataActions";

export const initialState = {
  error: false,
  isLoaded: false,
  books: [],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataActions.GET_POST:
      return { ...state, isLoaded: true };
    case dataActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        books: action.payload.results.books,
      };
    case dataActions.GET_POSTS_FAILURE:
      return { ...state, isLoaded: false, error: true };
    default:
      return state;
  }
};

export default DataReducer;

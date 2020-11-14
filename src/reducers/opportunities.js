import {
  REQUEST_OPPORTUNITIES,
  RECEIVE_OPPORTUNITIES,
  ERROR_REQUESTING_OPPORTUNITIES
} from "../actions";

const initialStore = {
    opportunities: [],
    isFetching: false,
    error: null,
  };

  const reducer = (state=initialStore, action) =>  {
    switch (action.type) {
      case REQUEST_OPPORTUNITIES: {
          return {
              ...state,
              isFetching: true
          }
      }

      case RECEIVE_OPPORTUNITIES: {
          return {
              ...state,
              isFetching: false,
              opportunities: [...action.opportunities],
            };
      }

      case ERROR_REQUESTING_OPPORTUNITIES: {
          return {
              ...state,
              isFetching: false,
              error: action.error
          }
      }

      default: {
        return state;
      }
  }
  }
  
  export default reducer;
  

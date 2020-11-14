import {
  REQUEST_SAVED_OPPORTUNITIES,
  RECEIVE_SAVED_OPPORTUNITIES,
  ERROR_REQUESTING_SAVED_OPPORTUNITIES
} from "../actions";

const initialStore = {
    savedOpportunities: [],
    isFetching: false,
    error: null,
  };

  const reducer = (state=initialStore, action) =>  {
    switch (action.type) {
      case REQUEST_SAVED_OPPORTUNITIES: {
          return {
              ...state,
              isFetching: true
          }
      }

      case RECEIVE_SAVED_OPPORTUNITIES: {
          return {
              ...state,
              isFetching: false,
              savedOpportunities: [...action.savedOpportunities],
            };
      }

      case ERROR_REQUESTING_SAVED_OPPORTUNITIES: {
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
  

import {
    BEGIN_SAVING,
    SAVE,
    ERROR_SAVING,
  } from "../actions";
  
const initialStore = {
    save: null,
    isSaving: false,
    error: null,
};
  
const reducer = (state=initialStore, action) =>  {
    switch (action.type) {
      case BEGIN_SAVING: {
        return {
          ...state,
          isSaving: true
        }
      }
      case SAVE: {
        return {
          ...state,
          isSaving: false,
          save: action.save.oppo_id,
        };
      }
      case ERROR_SAVING: {
        return {
          ...state,
          isSaving: false,
          error: action.error
        }
      }
      default: {
        return state;
      }
    }
}
    
export default reducer;
    
  
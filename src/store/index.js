import { combineReducers } from 'redux';

import opportunities from '../reducers/opportunities.js';
import savedOpportunities from '../reducers/savedOpportunities.js';
import save from '../reducers/save.js';

const rootReducer = combineReducers({
    opportunities: opportunities,
    savedOpportunities: savedOpportunities,
    save: save,
})

export default rootReducer;









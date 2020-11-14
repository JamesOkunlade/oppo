import { combineReducers } from 'redux';

import opportunities from '../reducers/opportunities.js';
import savedOpportunities from '../reducers/savedOpportunities.js';

const rootReducer = combineReducers({
    opportunities: opportunities,
    savedOpportunities: savedOpportunities
})

export default rootReducer;









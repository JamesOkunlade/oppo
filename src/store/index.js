import { combineReducers } from 'redux';

import opportunities from '../reducers/opportunities.js';

const rootReducer = combineReducers({
    opportunities: opportunities,
    saved_opportunities: saved_opportunities
})

export default rootReducer;









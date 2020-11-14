import axios from 'axios';
export const REQUEST_OPPORTUNITIES = 'REQUEST_OPPORTUNITIES';
export const RECEIVE_OPPORTUNITIES = 'RECEIVE_OPPORTUNITIES';
export const ERROR_REQUESTING_OPPORTUNITIES = 'ERROR_REQUESTING_OPPORTUNITIES';
export const REQUEST_SAVED_OPPORTUNITIES = 'REQUEST_SAVED_OPPORTUNITIES';
export const RECEIVE_SAVED_OPPORTUNITIES = 'RECEIVE_SAVED_OPPORTUNITIES';
export const ERROR_REQUESTING_SAVED_OPPORTUNITIES = 'ERROR_REQUESTING_SAVED_OPPORTUNITIES';
export const ANALYZE = "ANALYZE"

function requestOpportunities() {
    return {
        type: REQUEST_OPPORTUNITIES
    }
}

function receiveOpportunities(response) {
    return {
        type: RECEIVE_OPPORTUNITIES,
        opportunities: response,
    }
}

function errorRequestingOpportunities(error) {
    return {
        type: ERROR_REQUESTING_OPPORTUNITIES,
        error: error,
    }
}

export function fetchOpportunities() {
    return function(dispatch) {
        dispatch(requestOpportunities())
        axios.post('https://search.torre.co/opportunities/_search/?size=20', {})
        .then(function (response) {
            console.log(response.data.results);
            return dispatch(receiveOpportunities(response.data.results));
        })
        .catch(function (error) {
            console.log(error);
            return dispatch(errorRequestingOpportunities(error));
        });
    }
}


function requestSavedOpportunities() {
    return {
        type: REQUEST_SAVED_OPPORTUNITIES
    }
}

function receiveSavedOpportunities(response) {
    return {
        type: RECEIVE_SAVED_OPPORTUNITIES,
        savedOpportunities: response.data
    }
}

function errorRequestingSavedOpportunities(error) {
    return {
        type: ERROR_REQUESTING_SAVED_OPPORTUNITIES,
        error: error,
    }
}

export function fetchSavedOpportunities() {
    return function(dispatch) {
        dispatch(requestSavedOpportunities())
        axios.get('http://localhost:3000/opportunities')
        .then(function (response) {
            console.log(response.data);
            return dispatch(receiveSavedOpportunities(response));
        })
        .catch(function (error) {
            console.log(error);
            return dispatch(errorRequestingSavedOpportunities(error));
        });
    }
}

// export function fetchSavedOpportunities() {
//     return async function(dispatch) {
//         dispatch(requestSavedOpportunities())
//         try {
//             const response = await fetch(`http://localhost:3000/opportunities`);
//             const response_1 = await response.json();
//             return dispatch(receiveSavedOpportunities(response_1));
//         }
//         catch (error) {
//             return dispatch(errorRequestingSavedOpportunities(error));
//         }
//     }
// }


export const analyze = () => {
    return { 
        type: ANALYZE, payload: { } 
    }
};


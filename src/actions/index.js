import axios from 'axios';
export const REQUEST_OPPORTUNITIES = 'REQUEST_OPPORTUNITIES';
export const RECEIVE_OPPORTUNITIES = 'RECEIVE_OPPORTUNITIES';
export const ERROR_REQUESTING_OPPORTUNITIES = 'ERROR_REQUESTING_OPPORTUNITIES';
export const REQUEST_SAVED_OPPORTUNITIES = 'REQUEST_SAVED_OPPORTUNITIES';
export const RECEIVE_SAVED_OPPORTUNITIES = 'RECEIVE_SAVED_OPPORTUNITIES';
export const ERROR_REQUESTING_SAVED_OPPORTUNITIES = 'ERROR_REQUESTING_SAVED_OPPORTUNITIES';
export const BEGIN_SAVING = "BEGIN_SAVING";
export const SAVE = "SAVE";
export const ERROR_SAVING = "ERROR_SAVING";
export const REMOVING = "REMOVING";

const URL = "http://localhost:3000"
// const URL = "https://obscure-castle-68155.herokuapp.com/"


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
            return dispatch(receiveOpportunities(response.data.results));
        })
        .catch(function (error) {
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
        axios.get(`${URL}/opportunities`)
        .then(function (response) {
            return dispatch(receiveSavedOpportunities(response));
        })
        .catch(function (error) {
            return dispatch(errorRequestingSavedOpportunities(error));
        });
    }
}


function beginSaving() {
    return {
        type: BEGIN_SAVING
    }
}
function saving(response) {
    return {
        type: SAVE,
        save: response.data,
    }
}
function errorSaving(error) {
    return {
        type: ERROR_SAVING,
        error: error,
    }
}

export function save(id) {
    return function(dispatch) {
        dispatch(beginSaving())
        axios.post(`${URL}/opportunities`, { oppo_id: id })
        .then(function (response) {
            return dispatch(saving(response));
        })
        .catch(function (error) {
            return dispatch(errorSaving(error));
        });
    }
}


function removing(id) {
    return {
        type: REMOVING,
        removing: id,
    }
}

export function remove(id) {
    return function(dispatch) {
        axios.delete(`${URL}/opportunities/${id}`, { })
        .then(function (response) {
            dispatch(removing(id))
            return response
        })
        .catch(function (error) {
            return error
        });
    }
}
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const getTvSuccess = res => {
    return {
        type: actionTypes.GET_TV_SUCCESS,
        res: res
    }
}

const getTvStart = () => {
    return {
        type: actionTypes.GET_TV_START
    }
}

const getTvFail = () => {
    return {
        type: actionTypes.GET_TV_FAIL
    }
}

export const getTv = (pagenumber) => {
    return dispatch => {
        axios.get(`/discover/tv?api_key=0d61c8bc9552f9ea331e251f3c58a9ff&language=en-US&page=${pagenumber}`)
        .then(res => {
            dispatch(getTvStart())
            dispatch(getTvSuccess(res.data));
        })
        .catch(err => {
            dispatch(getTvFail());
        });
    }
}
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const getMoviesSuccess = res => {
    return {
        type: actionTypes.GET_MOVIES_SUCCESS,
        res: res
    }
}

const getMoviesStart = () => {
    return {
        type: actionTypes.GET_MOVIES_START
    }
}

const getMoviesFail = () => {
    return {
        type: actionTypes.GET_MOVIES_FAIL
    }
}

export const getMovies = (pagenumber) => {
    return dispatch => {
        axios.get(`/discover/movie?api_key=0d61c8bc9552f9ea331e251f3c58a9ff&language=en-US&page=${pagenumber}`)
        .then(res => {
            dispatch(getMoviesStart())
            dispatch(getMoviesSuccess(res.data));
        })
        .catch(err => {
            dispatch(getMoviesFail());
        });
    }
}
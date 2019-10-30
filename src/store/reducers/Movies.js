import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: null,
    loading: false
}

const getMoviesSuccess = (state, action)  => {
    return {
        ...state,
        movies: action.res,
        loading: false
    }
}

const getMoviesStart = (state, action) => {
    return {
        ...state, 
        loading: true
    }
}


const getMoviesFail = (state, action) => {
    return {
        ...state, 
        loading: false
    }
}
const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.GET_MOVIES_SUCCESS:
            return getMoviesSuccess(state, action);
        case actionTypes.GET_MOVIES_START:
            return getMoviesStart(state, action);
        case actionTypes.GET_MOVIES_FAIL:
            return getMoviesFail(state, action);
        default:
            return state;
    }
}

export default reducer;
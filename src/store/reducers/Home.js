import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    trendingMovies: null,
    trendingTv: null,
    loading: false,
    cardsLoading: false,
    tvLoading: false
}

const getNowPlayingSuccess = (state, action)  => {
    return {
        ...state,
        data: action.res,
        loading: false
    }
}

const getNowPlayingStart = (state, action) => {
    return {
        ...state, 
        loading: true
    }
}


const getNowPlayingFail = (state, action) => {
    return {
        ...state, 
        loading: false
    }
}

const getTrendingMoviesSuccess = (state, action)  => {
    return {
        ...state,
        trendingMovies: action.res,
        cardsLoading: false
    }
}

const getTrendingMoviesStart = (state, action) => {
    return {
        ...state, 
        cardsLoading: true
    }
}


const getTrendingMoviesFail = (state, action) => {
    return {
        ...state, 
        cardsLoading: false
    }
}

const getTrendingTvSuccess = (state, action)  => {
    return {
        ...state,
        trendingTv: action.res,
        tvLoading: false
    }
}

const getTrendingTvStart = (state, action) => {
    return {
        ...state, 
        tvLoading: true
    }
}


const getTrendingTvFail = (state, action) => {
    return {
        ...state, 
        tvLoading: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.GET_NOW_PLAYING_SUCCESS:
            return getNowPlayingSuccess(state, action);
        case actionTypes.GET_NOW_PLAYING_START:
            return getNowPlayingStart(state, action);
        case actionTypes.GET_NOW_PLAYING_FAIL:
            return getNowPlayingFail(state, action);
        case actionTypes.GET_TRENDING_MOVIES_SUCCESS:
            return getTrendingMoviesSuccess(state, action);
        case actionTypes.GET_TRENDING_MOVIES_START:
            return getTrendingMoviesStart(state, action);
        case actionTypes.GET_TRENDING_MOVIES_FAIL:
            return getTrendingMoviesFail(state, action);
        case actionTypes.GET_TRENDING_TV_SUCCESS:
            return getTrendingTvSuccess(state, action);
        case actionTypes.GET_TRENDING_TV_START:
            return getTrendingTvStart(state, action);
        case actionTypes.GET_TRENDING_TV_FAIL:
            return getTrendingTvFail(state, action);
        default:
            return state;
    }
}

export default reducer;
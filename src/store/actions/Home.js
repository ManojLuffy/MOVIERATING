import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const getNowPlayingSuccess = res => {
    return {
        type: actionTypes.GET_NOW_PLAYING_SUCCESS,
        res: res
    }
}

const getNowPlayingStart = () => {
    return {
        type: actionTypes.GET_NOW_PLAYING_START
    }
}

const getNowPlayingFail = () => {
    return {
        type: actionTypes.GET_NOW_PLAYING_FAIL
    }
}

export const getNowPlaying = () => {
    return dispatch => {
        axios.get('movie/now_playing?api_key=0d61c8bc9552f9ea331e251f3c58a9ff')
        .then(res => {
            dispatch(getNowPlayingStart())
            let results = [];
            res.data.results.map(r => {
                return results.push(r);
            });
            let nowplayData = [];
            results.map(r => {
                return nowplayData.push({
                    backdrop: r.backdrop_path,
                    poster: r.poster_path,
                    id: r.id,
                    title: r.title,
                    rating: r.vote_average
                })
            });
            dispatch(getNowPlayingSuccess(nowplayData));
        })
        .catch(err => {
            dispatch(getNowPlayingFail())
            console.log(err);
        });
    }
}

const getTrendingMoviesSuccess = res => {
    return {
        type: actionTypes.GET_TRENDING_MOVIES_SUCCESS,
        res: res
    }
}

const getTrendingMoviesStart = () => {
    return {
        type: actionTypes.GET_TRENDING_MOVIES_START
    }
}

const getTrendingMoviesFail = () => {
    return {
        type: actionTypes.GET_TRENDING_MOVIES_FAIL
    }
}

export const getTrendingMovies = () => {
    return dispatch => {
        axios.get('trending/movie/day?api_key=0d61c8bc9552f9ea331e251f3c58a9ff')
        .then(res => {
            dispatch(getTrendingMoviesStart());
            dispatch(getTrendingMoviesSuccess(res.data.results))
        })
        .catch(err => {
            dispatch(getTrendingMoviesFail())
        })
    }
}

const getTrendingTvSuccess = res => {
    return {
        type: actionTypes.GET_TRENDING_TV_SUCCESS,
        res: res
    }
}

const getTrendingTvStart = () => {
    return {
        type: actionTypes.GET_TRENDING_TV_START
    }
}

const getTrendingTvFail = () => {
    return {
        type: actionTypes.GET_TRENDING_TV_FAIL
    }
}

export const getTrendingTv = () => {
    return dispatch => {
        axios.get('trending/tv/day?api_key=0d61c8bc9552f9ea331e251f3c58a9ff')
        .then(res => {
            dispatch(getTrendingTvStart());
            dispatch(getTrendingTvSuccess(res.data.results))
        })
        .catch(err => {
            dispatch(getTrendingTvFail())
        })
    }
}
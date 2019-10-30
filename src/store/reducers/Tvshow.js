import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tv: null,
    loading: false
}

const getTvSuccess = (state, action)  => {
    return {
        ...state,
        tv: action.res,
        loading: false
    }
}

const getTvStart = (state, action) => {
    return {
        ...state, 
        loading: true
    }
}


const getTvFail = (state, action) => {
    return {
        ...state, 
        loading: false
    }
}
const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.GET_TV_SUCCESS:
            return getTvSuccess(state, action);
        case actionTypes.GET_TV_START:
            return getTvStart(state, action);
        case actionTypes.GET_TV_FAIL:
            return getTvFail(state, action);
        default:
            return state;
    }
}

export default reducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    carddetails: null,
    loading: false
}

const getCardDetailsSuccess = (state, action)  => {
    return {
        ...state,
        carddetails: action.res,
        loading: false
    }
}

const getCardDetailsStart = (state, action) => {
    return {
        ...state, 
        loading: true
    }
}


const getCardDetailsFail = (state, action) => {
    return {
        ...state, 
        loading: false
    }
}
const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.GET_CARD_DETAILS_SUCCESS:
            return getCardDetailsSuccess(state, action);
        case actionTypes.GET_CARD_DETAILS_START:
            return getCardDetailsStart(state, action);
        case actionTypes.GET_CARD_DETAILS_FAIL:
            return getCardDetailsFail(state, action);
        default:
            return state;
    }
}

export default reducer;
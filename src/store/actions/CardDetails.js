import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const getCardDetailsSuccess = res => {
    return {
        type: actionTypes.GET_CARD_DETAILS_SUCCESS,
        res: res
    }
}

const getCardDetailsStart = () => {
    return {
        type: actionTypes.GET_CARD_DETAILS_START
    }
}

const getCardDetailsFail = () => {
    return {
        type: actionTypes.GET_CARD_DETAILS_FAIL
    }
}

export const getCardDetails = (id, type) => {
    return dispatch => {
        axios.get('/' +type+ '/'+ id +'?api_key=0d61c8bc9552f9ea331e251f3c58a9ff&language=en-US&append_to_response=credits')
        .then(res => {
            dispatch(getCardDetailsStart())
            dispatch(getCardDetailsSuccess(res.data));
        })
        .catch(err => {
            dispatch(getCardDetailsFail());
        });
    }
}
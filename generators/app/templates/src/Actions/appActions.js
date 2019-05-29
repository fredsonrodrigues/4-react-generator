import { RATE_DECREASE, RATE_INCREASE } from "./actionTypes";

export const increaseRate = (value) => dispatch => {
    return dispatch({
        type: RATE_INCREASE,
        payload: value + 1
    });
}

export const decreaseRate = (value) => dispatch => {
    return dispatch({
        type: RATE_DECREASE,
        payload: value - 1
    });
}
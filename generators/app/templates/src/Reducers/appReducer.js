import { RATE_DECREASE, RATE_INCREASE } from "../Actions/actionTypes";

const INITIALSTATE = {
    rate: 0
}

const AppReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case RATE_INCREASE:
            return { ...state, rate: action.payload }
        case RATE_DECREASE:
            return { ...state, rate: action.payload }
        default:
            return state
    }
}

export {AppReducer}
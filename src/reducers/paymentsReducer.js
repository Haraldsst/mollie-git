import { FETCH_ALL_PAYMENTS, ADD_PAYMENT, RELOAD_PAYMENT } from '../actions/types'

const initialState = {
    payments: [],
    payment: [{}],
    lastFetchedAll: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_PAYMENTS:
            return {
                ...state,
                payments: action.payload,
                lastFetchedAll: action.time,
            }
        case ADD_PAYMENT:
            return {
                ...state,
                payment: [...state.payment, action.payload],
                target: action.payload,
            }
        case RELOAD_PAYMENT:
            return {
                ...state,
                payment: action.payload,
                target: action.payload,
            }
        default:
            return state;
    }
}
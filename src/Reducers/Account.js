import {
    DEC,
    GET_ACC_USER_FULFILLED,
    GET_ACC_USER_PENDING,
    GET_ACC_USER_REJECTED,
    INC,
    INC_BY_AMT
} from "../Actions/actionTypes"

// Acount Reducer
export function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case GET_ACC_USER_FULFILLED:
            return { amount: action.payload, pending: false }
        case GET_ACC_USER_PENDING:
            return { ...state, pending: true }
        case GET_ACC_USER_REJECTED:
            return { ...state, error: action.error, pending: false }
        case INC:
            return { amount: state.amount + 1 }
        case DEC:
            return { amount: state.amount - 1 }
        case INC_BY_AMT:
            return { amount: state.amount + action.payload }
        default:
            return state;
    }
}
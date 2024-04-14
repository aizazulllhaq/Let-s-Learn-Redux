import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { thunk } from 'redux-thunk'

// Action Types
// const INIT = "ACCOUNT/INIT";

// Handling Async dispatch
const GET_ACC_USER_PENDING = "ACCOUNT/GET_USER/PENDING";
const GET_ACC_USER_FULFILLED = "ACCOUNT/GET_USER/Fulfiled";
const GET_ACC_USER_REJECTED = "ACCOUNT/GET_USER/Rejected";

const INC = "ACCOUNT/INCREMENT";
const DEC = "ACCOUNT/DECREMENT";
const INC_BY_AMT = "ACCOUNT/INCREMENT_BY_AMOUNT";
// Action Types for Bonus Reducer
const INC_BONUS = "BONUS/INCREMENT";

// Store & Middleware Configuration
const store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default, thunk));

// Reducer's
// Acount Reducer
function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case GET_ACC_USER_FULFILLED:
            return { amount: action.payload }
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

// Bonus Reducer
function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case INC_BY_AMT:
            if (action.payload >= 100) // Taking decision according to amount (if amount > 100 ) then increment points + 1
                return { points: state.points + 10 };
        case INC_BONUS:
            return { points: state.points + 1 }
        default:
            return state;
    }

}



function getUserAmount(id) {

    return async (dispatch, getState) => {
        try {
            dispatch(getAccUserPending())

            const { data } = await axios.get(`http://localhost:3000/accounts?id=${id}`);

            dispatch(getAccUserFulfiled(data[0].amount))
        } catch (error) {
            dispatch(getAccUserRejected(error.message))
        }
    }
}


// Action Creators :


const getAccUserPending = () => ({ type: GET_ACC_USER_PENDING });
const getAccUserFulfiled = (value) => ({ type: GET_ACC_USER_FULFILLED, payload: value })
const getAccUserRejected = (error) => ({ type: GET_ACC_USER_REJECTED, error: error })

const increment = () => ({ type: INC })

const decrement = () => ({ type: DEC })

const incrementByAmount = value => ({ type: INC_BY_AMT, payload: value })

const initUser = value => ({ type: INIT, payload: value });

const incrementBonus = () => ({ type: INC_BONUS });


setInterval(() => {
    store.dispatch(getUserAmount(2)); // when using ( async & thunk ) -> pass function defINITion not calling function
}, 2000);
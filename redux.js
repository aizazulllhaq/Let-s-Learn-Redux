import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import { thunk } from 'redux-thunk'

// Action Types 
const INIT = "INIT";
const INC = "INCREMENT";
const DEC = "DECREMENT";
const INC_BY_AMT = "INCREMENT_BY_AMOUNT";


// Store & Middleware Configuration
const store = createStore(accountReducer, applyMiddleware(logger.default, thunk));

// Reducer 
function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case INIT:
            return {}
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


// Async Api Call
// 1 - Code which can't worked : 
// 2 - async function INITUser() {
//     const { data } = await axios.get("http://localhost:3000/accounts?id=1");
//     return { type: INIT, payload: data[0].amount }
// }
// Error : Acions must be plain objects.
// Action Creators are Syncronous . they can't wait for anything , they direct return object 
// so we can't use async-function in dispatch .

// Solution : using Middleware => redux-thunk
// 1 - Code which valid and worked 
// 2 - Async Action using Thunk

function getUserAmout(id) {

    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts?id=${id}`);

        dispatch(initUser(data[0].amount))
    }
}


// Action Creators :

const increment = () => ({ type: INC })

const decrement = () => ({ type: DEC })

const incrementByAmount = value => ({ type: INC_BY_AMT, payload: value })

function initUser(value) {
    return { type: INIT, payload: value }
}



setInterval(() => {
    // store.dispatch(increment());
    store.dispatch(getUserAmout(2)); // when using ( async & thunk ) -> pass function defINITion not calling function
}, 5000);

// Global State ( Example )
// console.log(store.getState());
import axios from 'axios'
import { DEC, GET_ACC_USER_FULFILLED, GET_ACC_USER_PENDING, GET_ACC_USER_REJECTED, INC, INC_BONUS, INC_BY_AMT } from './actionTypes';

// Action Creators :

export const getUserAmount = (id) => {

    return async (dispatch, getState) => {
        try {
            dispatch(getAccUserPending())

            const { data } = await axios.get(`http://localhost:8080/accounts?id=${id}`);

            dispatch(getAccUserFulfiled(data[0].amount))
        } catch (error) {
            dispatch(getAccUserRejected(error.message))
        }
    }
}

export const getAccUserPending = () => ({ type: GET_ACC_USER_PENDING });
export const getAccUserFulfiled = (value) => ({ type: GET_ACC_USER_FULFILLED, payload: value })
export const getAccUserRejected = (error) => ({ type: GET_ACC_USER_REJECTED, error: error })

export const increment = () => ({ type: INC })

export const decrement = () => ({ type: DEC })

export const incrementByAmount = value => ({ type: INC_BY_AMT, payload: value })

export const incrementBonus = () => ({ type: INC_BONUS });

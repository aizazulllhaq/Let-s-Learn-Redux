import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    amount: 0,
}

export const fetchUserAmt = createAsyncThunk(
    'account/getUser',
    async (id, thunkApi) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/accounts?id=${id}`)
            return data[0].amount
        } catch (error) {
            throw error;
        }

    },
)

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => { // with the help of immer library 
            state.amount += 1
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
    },
    // here extraReducers : use for perform Async Api request
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAmt.fulfilled, (state, action) => {
                state.amount = action.payload
                state.pending = false
            })
            .addCase(fetchUserAmt.pending, (state) => {
                state.pending = true
            })
            .addCase(fetchUserAmt.rejected, (state, action) => {
                state.error = action.error.message
                state.pending = false;
            });
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer
import { createAction, createReducer } from "@reduxjs/toolkit";


export const increment = createAction("reward/increment");
export const decrement = createAction("reward/decrement");
export const incrementByAmount = createAction("reward/incrementByAmount");


const rewardReducer = createReducer({ points: 5 }, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.points++
        })
        .addCase(decrement, (state, action) => {
            state.points--
        })
        .addCase(incrementByAmount, (state, action) => {
            state.points += action.payload
        })
});

export default rewardReducer;
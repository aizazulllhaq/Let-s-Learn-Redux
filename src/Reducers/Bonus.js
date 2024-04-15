import {
    INC_BONUS,
    INC_BY_AMT
} from "../Actions/actionTypes";

// Bonus Reducer
export function bonusReducer(state = { points: 0 }, action) {
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
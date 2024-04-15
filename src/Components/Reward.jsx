import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../reducers/reward";

const Reward = () => {

    const points = useSelector(state => state.reward.points);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Reward Component</h1>
            <h1>Account Balance</h1>
            <p>Points : {points}</p>
            <button onClick={() => dispatch(increment())}>Increment Bonus + </button>
            <button onClick={() => dispatch(decrement())}>Decrement Bonus - </button>
            <button onClick={() => dispatch(incrementByAmount(Number(6)))}>Increment By Amount + </button>
        </>
    )
}

export default Reward;
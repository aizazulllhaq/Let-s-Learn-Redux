import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

const Bonus = () => {

    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Account Balance</h1>
            <p>Points : {points}</p>
            <button onClick={() => dispatch(increment())}>Increment Bonus + </button>
        </>
    )
}

export default Bonus;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getUserAmount, increment, incrementByAmount } from "../Actions/actionCreators";

const Account = () => {

    const [value, setValue] = useState("");

    const handleIncByAmt = (e) => {
        setValue(e.target.value);
    }

    const amount = useSelector(state => state.account.amount);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Account Balance</h1>
            <p>Amount : {amount} </p>
            <input type="text" value={value} onChange={handleIncByAmt} placeholder="Enter by Amount" />
            <button onClick={() => dispatch(incrementByAmount(Number(value)))}>Incremet By Amount</button>
            <button onClick={() => dispatch(increment())}>Increment Amount + </button>
            <button onClick={() => dispatch(decrement())}>Decrement Amount - </button>
            <button onClick={() => dispatch(getUserAmount(1))}>Init Amount </button>
        </>
    )
}

export default Account
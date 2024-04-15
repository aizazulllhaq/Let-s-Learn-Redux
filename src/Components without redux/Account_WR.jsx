import { useState } from "react";

const Account_WR = ({ incAmt, decAmt, amount, incByAmt }) => {

    const [value, setValue] = useState(null);

    const handleIncByAmt = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>Account Balance</h1>
            <p>Amount : {amount} </p>
            <input type="text" value={value} onChange={handleIncByAmt} placeholder="Enter by Amount" />
            <button onClick={() => incByAmt(Number(value))}>Incremet By Amount</button>
            <button onClick={incAmt}>Increment Amount + </button>
            <button onClick={decAmt}>Decrement Amount - </button>
        </>
    )
}

export default Account_WR;
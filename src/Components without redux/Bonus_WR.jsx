const Bonus_WR = ({ incPnt, decPnt,points }) => {


    return (
        <>
            <h1>Account Balance</h1>
            <p>Points : {points} </p>
            <button onClick={incPnt}>Increment Bonus + </button>
            <button onClick={decPnt}>Decrement Bonus - </button>
        </>
    )
}

export default Bonus_WR;
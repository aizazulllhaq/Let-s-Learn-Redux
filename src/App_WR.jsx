import { useState } from 'react';
import './App.css'
import Account from './Components without redux/Account_WR';
import Bonus from './Components without redux/Bonus_WR';

function App() {

  const [amount, setAmount] = useState(0);
  const [points, setPoints] = useState(0);

  const incAmt = () => {
    setAmount((preAmt) => preAmt + 1);
  }

  const decAmt = () => {
    setAmount((preAmt) => preAmt - 1)
  }

  const incByAmt = (amt) => {
    setAmount((preAmt) => preAmt + amt)
  }

  const incPnt = () => {
    setPoints((prePoint) => prePoint + 1);
  }

  const decPnt = () => {
    setPoints((prePoint) => prePoint + 1)
  }

  return (
    <>
      <h1>App Component</h1>
      <hr />
      <h3>Total Amount : {amount} </h3>
      <h3>Total Points : {points} </h3>
      <hr />
      <br /><br /><br />
      <Account incAmt={incAmt} decAmt={decAmt} amount={amount} incByAmt={incByAmt} />
      <hr />
      <br /><br /><br />
      <Bonus incPnt={incPnt} decPnt={decPnt} points={points} />
    </>
  )
}

export default App;
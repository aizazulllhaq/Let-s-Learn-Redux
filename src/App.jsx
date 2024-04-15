import { useSelector } from 'react-redux';
import './App.css'
import Account from './Components/Account';
import Bonus from './Components/Bonus';
import Reward from './Components/Reward';
import Admin from './Components/Admin';


function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const account = useSelector(state => state.account);

  return (
    <>
      <h1>App Component</h1>
      <hr />
      {
        account.pending ? <h3>Loading .. . .</h3> : account.error ? <p>{account.error}</p> : <h3>Total Amount : {amount} </h3>
      }
      <h3>Total Points : {points} </h3>
      <hr />
      <br /><br /><br />
      <Account />
      <hr />
      <br /><br /><br />
      <Bonus />
      <hr />
      <Reward />
      <hr />
      <Admin />
    </>
  )
}

export default App;
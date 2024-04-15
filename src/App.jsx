import './App.css'
import Account from "./Components/Account"
import Bonus from "./Components/Bonus"
import { useSelector } from 'react-redux';


function App() {

    const amount = useSelector(state => state.account.amount);
    const points = useSelector(state => state.bonus.points);
    const account = useSelector(state => state.account);

    return (
        <>
            <h1>App Component</h1>
            <hr />
            {
                account.pending ? <h4>Loading ... .</h4> : account.error ? <p>{account.error}</p> : <h2>Current Amount : {amount}</h2>
            }
            <h3>Total Amount : {amount} </h3>
            <h3>Total Points : {points} </h3>
            <hr />
            <br /><br /><br />
            <Account />
            <hr />
            <br /><br /><br />
            <Bonus />
        </>
    )
}

export default App;
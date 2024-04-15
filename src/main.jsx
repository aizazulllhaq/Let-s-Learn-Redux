import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { accountReducer } from './Reducers/Account.js'
import { bonusReducer } from './Reducers/Bonus.js'
import logger from 'redux-logger'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'


const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger,thunk)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

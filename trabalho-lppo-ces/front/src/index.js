import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux' 
import './index.css';
import App from './App';
import appReducer from './redux/reducers'

const reducer = combineReducers({appReducer})
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, 
            document.getElementById('root'));
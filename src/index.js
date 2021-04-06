import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Global Style
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./utilize/reducer.js";
import {Provider} from "react-redux";

const reduxStore = createStore(combineReducers({orders: reducer}), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
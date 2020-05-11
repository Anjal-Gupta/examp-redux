import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './reducers/rootReducer';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

var store = applyMiddleware(thunk)(createStore)(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

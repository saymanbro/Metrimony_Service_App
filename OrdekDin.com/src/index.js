import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducer/user';

const store = createStore(allReducers, compose(applyMiddleware(thunk)));


ReactDOM.render(

    <Provider store={store}>
            <App />
    </Provider>
, document.getElementById("root")
);









































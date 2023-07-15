import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

// REDUCERS
// feeling reducer
const feeling = (state = 0, action) => {
    if (action.type === 'ADD_FEELING') {
        return state = action.payload
    } else if (action.type === 'CLEAR_FEELING') {
        return state = 0
    }
    return state;
};

// understanding reducer
const understanding = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return state = action.payload
    } else if (action.type === 'CLEAR_UNDERSTANDING') {
        return state = 0
    }
    return state;
};

// support reducer
const support = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return state = action.payload
    } else if (action.type === 'CLEAR_SUPPORT') {
        return state = 0
    }
    return state;
};

// comment reducer
const comment = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        return state = action.payload
    } else if (action.type === 'CLEAR_COMMENT') {
        return state = ''
    }
    return state;
};


// STORE
const store = createStore(
    combineReducers({
       feeling, understanding, support, comment 
    }), applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

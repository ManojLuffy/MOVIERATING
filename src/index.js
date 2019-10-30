import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import homeReducer from './store/reducers/Home';
import moviesReducer from './store/reducers/Movies';
import tvReducer from './store/reducers/Tvshow';
import cardDetailsReducer from './store/reducers/CardDetails';

//const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    home: homeReducer,
    movies: moviesReducer,
    tv: tvReducer,
    carddetails: cardDetailsReducer
    });
    
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store = {store}> 
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

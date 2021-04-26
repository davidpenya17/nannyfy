/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootMiddleware from '../redux/middlewares/root';
import rootReducer from '../redux/reducers/root';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, ...rootMiddleware)));

export default store;

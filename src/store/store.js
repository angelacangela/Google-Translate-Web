import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root-reducer.js';
import thunk from "redux-thunk";

const middleware = [thunk];

export default createStore(rootReducer, {}, applyMiddleware(...middleware));

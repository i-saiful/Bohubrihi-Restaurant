import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer.js";
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const myStore = createStore(reducer, applyMiddleware(logger, thunk))

export default myStore
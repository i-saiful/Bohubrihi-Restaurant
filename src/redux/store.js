import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer.js";
import {logger} from 'redux-logger';

const myStore = createStore(reducer, applyMiddleware(logger))

export default myStore
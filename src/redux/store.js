import { createStore } from "redux";
import { reducer } from "./Reducer.js";

const myStore = createStore(reducer)

export default myStore
import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";
import * as actionType from './actionType.js';

const dishReducer = (dishState = DISHES, action) => {
    switch(action.type) {
        default:
            return dishState
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            comment.date = new Date().toDateString();
            comment.id = commentState.length
            return commentState.concat(comment)
    
        default:
            return commentState
    }
}

export const reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})
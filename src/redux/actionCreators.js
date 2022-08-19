import * as actionTypes from './actionType.js';

export const addComment = (dishId, author, rating, comment) => ({
        type: actionTypes.ADD_COMMENT,
        payload: { dishId, author, rating, comment }
    }
)
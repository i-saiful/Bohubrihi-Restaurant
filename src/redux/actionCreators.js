import DISHES from '../data/dishes.js';
import * as actionTypes from './actionType.js';

export const addComment = (dishId, author, rating, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: { dishId, author, rating, comment }
}
)

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISH,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading())
        setTimeout(() => {dispatch(loadDishes(DISHES))}, 200)
        // dispatch(loadDishes(DISHES))
    }
}
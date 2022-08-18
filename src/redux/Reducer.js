import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initState = { 
    dishes: DISHES,
    comments: COMMENTS
}

export const reducer = (state = initState, action) => {
    return state
}

import { combineReducers } from "redux";

import { counterReducer } from "./counter/slice";
import { todosReducer } from "./todoList/slice";
import { postsReducer } from "./posts/slice";

 const rootReducer = combineReducers({
    countRed: counterReducer,
 todoRed: todosReducer,
 postsRed: postsReducer,
 
})

export default rootReducer;
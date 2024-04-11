
import { combineReducers } from "redux";

import { counterReducer } from "./counter/slice";
import { todosReducer } from "./todoList/slice";

 const rootReducer = combineReducers({
    countRed: counterReducer,
 todoRed: todosReducer,
})

export default rootReducer;
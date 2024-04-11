
import { combineReducers } from "redux";

import { todosReducer } from "./todoList/reduser";
import { counterReducer } from "./counter/slice";

 const rootReducer = combineReducers({
    countRed: counterReducer,
 todoRed: todosReducer,
})

export default rootReducer;
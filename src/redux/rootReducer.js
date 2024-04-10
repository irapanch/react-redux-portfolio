
import { combineReducers } from "redux";
import { counterReducer } from "./counter/reduser";
import { todosReducer } from "./todoList/reduser";

 const rootReducer = combineReducers({
    countRed: counterReducer,
 todoRed: todosReducer,
})

export default rootReducer;
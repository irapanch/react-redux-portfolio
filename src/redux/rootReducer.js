
import { combineReducers } from "redux";
import { counterReduser } from "./counter/reduser";
import { todosReducer } from "./todoList/reduser";

 const rootReducer = combineReducers({
    countRed: counterReduser,
 todoRed: todosReducer,
})

export default rootReducer;
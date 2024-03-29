import { combineReducers } from "redux";
import { counterReduser } from "./counter/reduser";
import { todosReduser } from "./todoList/reduser";

export const rootReduser = combineReducers({
    counter: counterReduser,
todoList: todosReduser,
})
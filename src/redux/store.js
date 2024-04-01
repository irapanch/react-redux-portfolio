import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
// import rootReducer from "./rootReducer";
import { todosReducer } from "./todoList/reduser";

const enhancer = devToolsEnhancer();
// export const store = createStore(counterReduser, enhancer)
// export const store = createStore(rootReducer, enhancer)
export const store = createStore(todosReducer, enhancer)
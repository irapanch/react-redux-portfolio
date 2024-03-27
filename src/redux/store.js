import { createStore } from "redux";
import { counterReduser } from "./counter/reduser";
import { devToolsEnhancer } from "@redux-devtools/extension";


const enhancer = devToolsEnhancer();
export const store = createStore(counterReduser, enhancer)
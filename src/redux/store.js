// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';


// рефакторинг редакс-тулкіт
export const store = configureStore({
    reducer: rootReducer,

    // можемо закривати дані від користувачів й розробників напряму
    // devTools: false,

    // або перевіряти, щоб виключати девтулзи лише при продакшені
    devTools: process.env.NODE_ENV !== 'production',
})
console.log(process.env);
// const enhancer = devToolsEnhancer();
// // export const store = createStore(counterReduser, enhancer)
// export const store = createStore(rootReducer, enhancer)
// // export const store = createStore(todosReducer, enhancer)
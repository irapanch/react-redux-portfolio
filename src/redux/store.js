// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import rootReducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import { todosReducer } from "./todoList/slice";
import { counterReducer } from './counter/slice';
import { postsReducer } from './posts/slice';
// import { toast } from 'react-toastify';
import { todoApi } from './RTKQuery/todoApi';
import { setupListeners } from '@reduxjs/toolkit/query';
// import logger from 'redux-logger';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
// ----middlewares
// const myLogger = (store) => (next) => (action) => {
// if (action.payload?.title === 'admin'){
//   action.payload = {
//     ...action.payload,
//     role: 'admin',
//   }
//   toast.success('Welcome admin!')
// }
// next(action)
// } 


  const persistedReducer = persistReducer(persistConfig, counterReducer)
// рефакторинг редакс-тулкіт
export const store = configureStore({
//   reducer: persistedReducer,
    reducer:{
       persistedReducer,
    postsRed: postsReducer,
    countRed: counterReducer,
    todoRed: todosReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
    // можемо закривати дані від користувачів й розробників напряму
    // devTools: false,

    // або перевіряти, щоб виключати девтулзи лише при продакшені
    devTools: process.env.NODE_ENV !== 'production',

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    // }).concat(logger, myLogger),
  }).concat(  todoApi.middleware),
})

// const enhancer = devToolsEnhancer();
// // export const store = createStore(counterReduser, enhancer)
// export const store = createStore(rootReducer, enhancer)
// // export const store = createStore(todosReducer, enhancer)

// -----------------------------------------------
// refetch RTKQuery - оновлення запиту на сторінці при поверненні на неї з іншої вкладки чи зовнішньої програми. Корисно при створенні чата або корзини тощо
setupListeners(store.dispatch)


export const persistor = persistStore(store)


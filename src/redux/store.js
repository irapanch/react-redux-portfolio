// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
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

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
// рефакторинг редакс-тулкіт
export const store = configureStore({
    reducer: persistedReducer,

    // можемо закривати дані від користувачів й розробників напряму
    // devTools: false,

    // або перевіряти, щоб виключати девтулзи лише при продакшені
    devTools: process.env.NODE_ENV !== 'production',

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
console.log(process.env);
// const enhancer = devToolsEnhancer();
// // export const store = createStore(counterReduser, enhancer)
// export const store = createStore(rootReducer, enhancer)
// // export const store = createStore(todosReducer, enhancer)

export const persistor = persistStore(store)
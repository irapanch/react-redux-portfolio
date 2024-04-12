import { nanoid } from "nanoid";
// import { ADD_TODO, CLEAR_SELECTED_TODOS, CLEAR_TODOS, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from "./constants";
import {createAction} from '@reduxjs/toolkit'

// рефакторінг редакс-тулкітс
export const deleteTodo = createAction('deleteTodo')
export const addTodo = createAction('addTodo', (title)=>  {
    return {payload:{
        id: nanoid(),
        completed: false,
        todo: title,}}
    
})
export const toggleTodo = createAction('toggleTodo')
export const clearTodos = createAction('clearTodos')
export const clearSelectedTodo = createAction('clearSelectedTodo')
export const setFilterStr = createAction('setFilterStr')


// export const deleteTodo = (id) => ({type: DELETE_TODO , payload: id})
// export const addTodo = (title) => ({type: ADD_TODO, payload: {
    // id: nanoid(),
    // completed: false,
    // todo: title,
// } })
// export const toggleTodo = (id) => ({type: TOGGLE_TODO , payload: id})
// export const clearTodos= () => ({type: CLEAR_TODOS})
// export const clearSelectedTodo = () => ({type: CLEAR_SELECTED_TODOS})
// export const setFilterStr = (activeFilter) => ({type: SET_FILTER  , payload: activeFilter})


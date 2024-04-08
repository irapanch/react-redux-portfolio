import { nanoid } from "nanoid";
import { ADD_TODO, CLEAR_SELECTED_TODOS, CLEAR_TODOS, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from "./constants";

export const deleteTodo = (id) => ({type: DELETE_TODO , payload: id})
export const addTodo = (title) => ({type: ADD_TODO, payload: {
    id: nanoid(),
    completed: false,
    todo: title,
} })
export const toggleTodo = (id) => ({type: TOGGLE_TODO , payload: id})
export const clearTodos= () => ({type: CLEAR_TODOS})
export const clearSelectedTodo = () => ({type: CLEAR_SELECTED_TODOS})
export const setFilterStr = (activeFilter) => ({type: SET_FILTER  , payload: activeFilter})
// export const = () => ({type: , payload:})
// export const = () => ({type: , payload:})
// export const = () => ({type: , payload:})
// export const = () => ({type: , payload:})
// export const = () => ({type: , payload:})
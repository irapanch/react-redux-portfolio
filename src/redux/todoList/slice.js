import {createSlice, nanoid} from '@reduxjs/toolkit'



const initialState = {
    todos: [{todo: 'TEST', id: 1, completed: true} ],
    filter: 'all',
  
}
const slice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            prepare: (title) => {
                return {
                    payload:{
                        id: nanoid(),
                        completed: false,
                        todo: title,
                    }
                }
            },
            reducer: (state, action)=>{
                state.todos.push(action.payload)},
        },
        deleteTodo: (state, action) => {
            state.todos= state.todos.filter((item) => item.id !== action.payload)
        },
        clearSelectedTodo: (state, action) => {
            state.todos= state.todos.filter((item) => !item.completed)
        },
        clearTodos: (state, action) => {
            state.todos= []
        },
        setFilterStr: (state, action) => {
            state.filter= action.payload
        },
        toggleTodo: (state, action) => {
            state.todos=  state.todos.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item ))
        },
    }
})

export const todosReducer = slice.reducer
export const { addTodo, clearSelectedTodo, clearTodos, deleteTodo, setFilterStr, toggleTodo } = slice.actions
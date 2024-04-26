// import {createReducer} from '@reduxjs/toolkit'
// import { addTodo, clearSelectedTodo, clearTodos, deleteTodo, setFilterStr, toggleTodo } from './actions'
// const initialState = {
//     todos: [{todo: 'TEST', id: 1, completed: true} ],
//     currentText: '',
//     isOpen: false,
//     isOpenSecondModal: false,
//     limit: 3,
//     filter: 'all',
  
//   }
  
//   export const todosReducer = createReducer(initialState, (builder)=> {
//     builder
//     .addCase(deleteTodo,(state, action)=>{
//       state.todos= state.todos.filter((item) => item.id !== action.payload)
//       // або використати splice
//       // const itemIndex = state.todos.findIndex(item => item.id === action.payload)
//       // state.todos.splice(itemIndex,1)

//   })
//   .addCase(addTodo,(state, action)=>{
//     state.todos.push(action.payload)})

//     // aбо 
//     // state.todos= [...state.todos, action.payload]

// .addCase(toggleTodo,(state, action)=>{
//   state.todos=  state.todos.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item ))
//   // aбо 
//     // const item = state.todos.find(item => item.id ===action.payload)
//     // item.completed = !item.completed
// })
// .addCase(clearTodos,(state, action)=>{
//   state.todos= []
// })
// .addCase(clearSelectedTodo,(state, action)=>{
//   state.todos= state.todos.filter((item) => !item.completed)
// })
// .addCase(setFilterStr,(state, action)=>{
//   state.filter= action.payload
// })
//   })
//   // export const todosReducer = (state = initialState, action) => { 
 
//   //   switch (action.type){
//   //     case 'DELETE_TODO':
//   //         return{
//   //           ...state,
//   //           todos: state.todos.filter((item) => item.id !== action.payload),
//   //         }   
//   //         case'ADD_TODO' :
//   //         return{
//   //           ...state,
//   //           todos:  [...state.todos, action.payload],
//   //         }  

//   //         case  'TOGGLE_TODO' :
//   //         return{
//   //           ...state,
//   //           todos: state.todos.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item
//   //               )),
//   //         }  
//   //         case  'CLEAR_TODOS' :
//   //           return{
//   //             ...state,
//   //             todos: [],
//   //           } 
//   //           case  'CLEAR_SELECTED_TODOS' :
//   //             return{
//   //               ...state,
//   //               todos: state.todos.filter((item) => !item.completed),
//   //             } 
//   //          case 'SET_FILTER'  :
//   //           return {
//   //             ...state,
//   //             filter: action.payload,
//   //           }
//   //           default:
//   //             return state
          
           
//   //   }
//   //     }

        
//           // ------------------------
     
//       // case 'SET_TODOS':
//       //   return{
//       //     ...state,
//       //     todos: action.payload,
//       //   }
//       //   case 'CHANGE_LIMIT':
//       //   return{
//       //     ...state,
//       //     limit: action.payload,
//       //   }
        
         
//       //     case  'CHANGE_TODO' :
//       //     return{
//       //       ...state,
//       //       currentText: action.payload,
//       //     }  
          
         
         
            
//       //     case  'TOGGLE_MODAL' :
//       //       return{
//       //         ...state,
//       //        isOpen: !state.isOpen,
//       //       } 
            
//       //       case  'TOGGLE_MODAL_SECOND' :
//       //         return{
//       //           ...state,
//       //          isOpenSecondModal: !state.isOpenSecondModal,
//       //         } 
             
//       //         case   'GET_RANDOM' :
//       //       return{
//       //         ...state,
//       //        todos: action.payload,
//       //       } 
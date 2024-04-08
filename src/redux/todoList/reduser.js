const initialState = {
    todos: [{todo: 'TEST', id: 1, completed: true} ],
    currentText: '',
    isOpen: false,
    isOpenSecondModal: false,
    limit: 3,
    filter: 'all',
  
  }
  
  
  export const todosReducer = (state = initialState, action) => { 
 
    switch (action.type){
      case 'DELETE_TODO':
          return{
            ...state,
            todos: state.todos.filter((item) => item.id !== action.payload),
          }   
          case'ADD_TODO' :
          return{
            ...state,
            todos:  [...state.todos, action.payload],
          }  

          case  'TOGGLE_TODO' :
          return{
            ...state,
            todos: state.todos.map((item) => (item.id === action.payload ? { ...item, completed: !item.completed } : item
                )),
          }  
          case  'CLEAR_TODOS' :
            return{
              ...state,
              todos: [],
            } 
            case  'CLEAR_SELECTED_TODOS' :
              return{
                ...state,
                todos: state.todos.filter((item) => !item.completed),
              } 
           case 'SET_FILTER'  :
            return {
              ...state,
              filter: action.payload,
            }
            default:
              return state
          
           
    }
      }

        
          // ------------------------
     
      // case 'SET_TODOS':
      //   return{
      //     ...state,
      //     todos: action.payload,
      //   }
      //   case 'CHANGE_LIMIT':
      //   return{
      //     ...state,
      //     limit: action.payload,
      //   }
        
         
      //     case  'CHANGE_TODO' :
      //     return{
      //       ...state,
      //       currentText: action.payload,
      //     }  
          
         
         
            
      //     case  'TOGGLE_MODAL' :
      //       return{
      //         ...state,
      //        isOpen: !state.isOpen,
      //       } 
            
      //       case  'TOGGLE_MODAL_SECOND' :
      //         return{
      //           ...state,
      //          isOpenSecondModal: !state.isOpenSecondModal,
      //         } 
             
      //         case   'GET_RANDOM' :
      //       return{
      //         ...state,
      //        todos: action.payload,
      //       } 
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { addTodo, clearSelectedTodo, clearTodos, deleteTodo, toggleTodo } from "../redux/todoList/actions";
import { selectTodos } from "../redux/todoList/selectors";


export const useTodoList = () => {
    const  todos = useSelector(selectTodos)
   
    	const dispatch = useDispatch()
        
const handleDelete = (id) => {
    dispatch(deleteTodo(id))
    toast.success('You deleted todo') 
  };

  const handleAdd = (title) => {
    dispatch(addTodo(title))
      
    };

    const handleToggleTodo = (id) => {
      
        dispatch(toggleTodo(id))
    
    };

    

const handleClearTodo = () => {
 
  dispatch(clearTodos()) 
};

const handleClearComplitedTodos = () => {
  dispatch(clearSelectedTodo()) 
};


  return {
    todos,  handleDelete, handleAdd, handleToggleTodo, handleClearTodo, handleClearComplitedTodos
  }
}

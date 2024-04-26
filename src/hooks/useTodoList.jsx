import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { addTodo, clearSelectedTodo, clearTodos, deleteTodo, setFilterStr, toggleTodo } from "../redux/todoList/slice";
import { selectFilter, selectTodos } from "../redux/todoList/selectors";
import { useEffect } from "react";
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk, toggleTodoThunk } from "../redux/todoList/operations";


export const useTodoList = () => {
    const  todos = useSelector(selectTodos)

    const filter = useSelector(selectFilter)
   
    	const dispatch = useDispatch()
      useEffect(() => {
        dispatch(fetchTodoThunk())
      }, [dispatch])
        
const handleDelete = (id) => {
    dispatch(deleteTodoThunk(id))
    toast.success('You deleted todo') 
  };

  const handleAdd = (title) => {
    dispatch(addTodoThunk({title, completed: false}))
      
    };

    const handleToggleTodo = (body) => {
      
        dispatch(toggleTodoThunk(body))
    
    };

    

const handleClearTodo = () => {
 
  dispatch(clearTodos()) 
};

const handleClearComplitedTodos = () => {
  dispatch(clearSelectedTodo()) 
};

const getFilteredData = (data, filter) => {
  switch (filter) {
    case 'all':
      return data
      case 'active':
        return data.filter(item => !item.completed)
        case 'completed':
          return data.filter(item => item.completed)
      default:
  }
}
const setFilter = (filterName)=> {
  dispatch(setFilterStr(filterName))
}

  return {
    todos: getFilteredData(todos, filter),
      handleDelete, 
      handleAdd,
       handleToggleTodo,
        handleClearTodo, 
        handleClearComplitedTodos,
        setFilter,
  }
}

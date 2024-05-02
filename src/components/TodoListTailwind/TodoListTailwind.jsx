import React, { useEffect } from 'react'
import AddFornTailwind from './AddFornTailwind'
import TodoItemTw from './TodoItemTw'
import FilterTailwind from './FilterTailwind'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredTodos, selectUncompleted } from '../../redux/todoList/selectors'
import { fetchTodoThunk } from '../../redux/todoList/operations'

const TodoListTailwind = () => {
    const todos = useSelector(selectFilteredTodos)
    const uncompletedTodos = useSelector(selectUncompleted)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchTodoThunk())
    }, [dispatch])
  return (
    <div>
        <AddFornTailwind/>
        <FilterTailwind/>
        <h1 className='text-center'>Uncompleted todos: {uncompletedTodos} </h1>
        <ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
        {todos.map(item => <TodoItemTw key={item.id} {...item}/>)}
        
        </ul>
        
    </div>
  )
}

export default TodoListTailwind
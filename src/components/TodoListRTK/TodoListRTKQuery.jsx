import React from 'react'
import AddFornTailwind from './AddFornTailwind'
import TodoItemTw from './TodoItemTw'
import { useFetchTodosQuery } from '../../redux/RTKQuery/todoApi'
import { Spinner } from 'flowbite-react'
// import FilterTailwind from './FilterTailwind'

const TodoListRTKQuery = () => {
   const {data = [], isLoading} = useFetchTodosQuery()
  return (
    <div>
        <AddFornTailwind/>
        {/* <FilterTailwind/> */}
        {isLoading && <Spinner>Loading...</Spinner>}
        <ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
        {data.map(item => <TodoItemTw key={item.id} {...item}/>)}
        
        </ul>
        
    </div>
  )
}

export default TodoListRTKQuery
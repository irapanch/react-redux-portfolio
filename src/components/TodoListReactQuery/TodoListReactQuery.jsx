import React from 'react'
import AddFornTailwind from './AddFornTailwind'
import TodoItemTw from './TodoItemTw'
import { useTodos } from 'hooks/useTodos'
import { TextInput } from 'flowbite-react'


const TodoListReactQuery = () => {
  //  ------------- код перенесений до власного хука useTodos.jsx


  //  const {data = [], isLoading, isError} = useQuery({
  //   queryFn: async () => {
  //     const {data} = await axios.get('https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos')
  //   return data
  //   }, 
  //   queryKey: ['todos'],
      
  //  })



const {data, isLoading, isError, value, setValue} = useTodos() // використаний власний хук
   if (isError) {
    return <h1>Error!</h1> // перед помилкою ReactQuery пробує тричі зробити reFetch
   }

  return (
    <div>
        <AddFornTailwind/>
        {/* <FilterTailwind/> */}
        <TextInput value={value} onChange={e => setValue(e.target.value)} placeholder="Type the text..." required  />
        {isLoading && <h1>Loading...</h1>}
        <ul className='grid grid-cols-3 py-5 px-2 gap-2 max-w-5xl mx-auto'>
        {data.map(item => <TodoItemTw key={item.id} {...item}/>)}
        
        </ul>
        
    </div>
  )
}

export default TodoListReactQuery
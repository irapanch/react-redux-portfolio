import { Button, Card,  Label,  } from 'flowbite-react'
import React, { useId } from 'react'
import clsx from 'clsx'
import { useMutation, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'


const TodoItemTw = ({id, title, completed}) => {
const queryClient = useQueryClient()
  const idItem = useId()// хук для генерації id всередині форми
  
  const {mutate: deleteTodo} = useMutation({
    mutationFn: async (id) => {
      const {data} = await axios.delete(`https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos/${id}`)
    return data
    },
    onSuccess: ()=>{
      toast.info('Todo was deleted!')
queryClient.invalidateQueries(['todos'])
    }
  })
  const { mutate: updateTodo } = useMutation({
    mutationFn: async (newData) => {
      const { data } = await axios.put(`https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos/${id}`, newData);
      return data;
    },
    onSuccess: () => {
      toast.success('Todo was updated!');
      queryClient.invalidateQueries(['todos']);
    },
  });

  const handleDelete = () => {
    deleteTodo(id)
  }
  const handleUpdateTodo = () => {
    const renameTitle = prompt('Enter  the new title here:')
    const newData = { title: renameTitle, completed: !completed };
    updateTodo(newData);
  }
 
  return (
    <Card className={clsx("max-w-sm", completed ? 'bg-gray-200' : 'bg-white' )}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     <p 
     onClick={handleUpdateTodo}
     className={completed ? 'line-through' : ''}>{title}</p>
    </h5>
    <div className="flex items-center gap-2">
      {/* {loading && currentItem === id ? (
      <Spinner aria-label="Default status example" />) : (
      <>
      <Checkbox id={idItem} 
        checked={completed} 
        // onChange={()=>dispatch(toggleTodoThunk({id, title, completed}))}
        />
      <Label htmlFor={idItem}>{completed ? 'Done' : 'Set completed'}</Label>
        </>)
        } */}
        <Label htmlFor={idItem}>{completed ? 'Done' : 'Set completed'}</Label>
        
      </div>
    <Button onClick={handleDelete}>
     Delete todo
    </Button>
  </Card>
  )
}

export default TodoItemTw
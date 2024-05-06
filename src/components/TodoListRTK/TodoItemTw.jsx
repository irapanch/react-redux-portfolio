import { Button, Card, Checkbox, Label, Spinner } from 'flowbite-react'
import React, { useId } from 'react'
// import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import clsx from 'clsx'
import { useDeleteTodoMutation, useToggleTodoMutation } from '../../redux/RTKQuery/todoApi'

const TodoItemTw = ({id, title, completed}) => {

 const idItem = useId()// хук для генерації id всередині форми
 const [deleteTodo] = useDeleteTodoMutation() 
 const [toggleTodo] = useToggleTodoMutation() 
 const handleDelete = () => {
    // dispatch(deleteTodoThunk(id))
    deleteTodo(id)
  }
 
 
  return (
    <Card className={clsx("max-w-sm", completed ? 'bg-gray-200' : 'bg-white' )}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     <p className={completed ? 'line-through' : ''}>{title}</p>
    </h5>
    <div className="flex items-center gap-2">
      {false === id ? (
      <Spinner aria-label="Default status example" />) : (
      <>
      <Checkbox id={idItem} 
        checked={completed} 
        onChange={()=>toggleTodo({id, title, completed})}
        />
      <Label htmlFor={idItem}>{completed ? 'Done' : 'Set completed'}</Label>
        </>)
        }
        
      </div>
    <Button onClick={handleDelete}>
     Delete todo
    </Button>
  </Card>
  )
}

export default TodoItemTw
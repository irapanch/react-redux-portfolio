import { Button, Card, Checkbox, Label, Spinner } from 'flowbite-react'
import React, { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todoList/operations'
import clsx from 'clsx'
import { selectCurrentItem, selectLoading } from '../../redux/todoList/selectors'

const TodoItemTw = ({id, title, completed}) => {

  const loading = useSelector(selectLoading)
 const  currentItem = useSelector(selectCurrentItem)
  const dispatch = useDispatch()
  const idItem = useId()// хук для генерації id всередині форми
  const handleDelete = () => {
    dispatch(deleteTodoThunk(id))
  }
 
  return (
    <Card className={clsx("max-w-sm", completed ? 'bg-gray-200' : 'bg-white' )}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     <p className={completed ? 'line-through' : ''}>{title}</p>
    </h5>
    <div className="flex items-center gap-2">
      {loading && currentItem === id ? (
      <Spinner aria-label="Default status example" />) : (
      <>
      <Checkbox id={idItem} 
        checked={completed} 
        onChange={()=>dispatch(toggleTodoThunk({id, title, completed}))}
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
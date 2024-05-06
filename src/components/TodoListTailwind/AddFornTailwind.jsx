import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addTodoThunk } from '../../redux/todoList/operations';
import 'tailwindcss/tailwind.css';

const AddFornTailwind = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const submit = (e) => {
        e.preventDefault()
        dispatch(addTodoThunk({title: value}))
        setValue('')
    }
  return (
    <form onSubmit={submit} className="gap-5 w-1/2 px-2 mx-auto flex justify-center">
      
      <TextInput value={value} onChange={e => setValue(e.target.value)} placeholder="Type the text..." required  />
      <Button  type="submit">Submit</Button> 
    </form>
  )
}

export default AddFornTailwind
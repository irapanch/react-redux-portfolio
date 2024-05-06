import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import 'tailwindcss/tailwind.css';
import { useAddTodosMutation } from '../../redux/RTKQuery/todoApi';

const AddFornTailwind = () => {
    const [value, setValue] = useState('')
    const [addTodo] = useAddTodosMutation()
    const submit = (e) => {
        e.preventDefault()
        // dispatch(addTodoThunk({title: value}))
        addTodo({title: value})
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

import { Button, TextInput } from 'flowbite-react'
import { useTodos } from 'hooks/useTodos';
import React, { useState } from 'react'

import 'tailwindcss/tailwind.css';

const AddFornTailwind = () => {
   
    const [value, setValue] = useState('')

    // ------- код перенесений до власного  хука useTodos

    // const queryClient = useQueryClient()
    // const {mutate: addTodo} =  useMutation({
    //   mutationFn: async (body) => {
    //     const {data} = await axios.post(`https://6536b8babb226bb85dd28cc5.mockapi.io/adverts/todos/`, body)
    //   return data
    //   }, 
    //   onSuccess: () => {
    //     toast.success('You added todo')
    //     queryClient.invalidateQueries(['todos'])
    //   },
    // })
    const {addTodo} = useTodos()
    const submit = (e) => {
        e.preventDefault()
       addTodo({title: value}) // береться з useTodos()
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
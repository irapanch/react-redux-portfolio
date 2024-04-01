import React, { useState } from 'react'
import StyledButton from 'styledComponents/StyledButton'
import { Flex } from 'styles/GlobalStyles'
import { StyledInput } from './TodoList.styled'

const AddForm = ({addTodo}) => {
    const [value, setValue] = useState()
    const submit = (e) =>{
        e.preventDefault()
addTodo(value)
setValue('')
    }
  return (
    <Flex $height="auto">
        <form onSubmit={submit} >
        <StyledInput
            
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
          <StyledButton
          //  onClick={handleAdd}
           >Add</StyledButton>
        </form>
          

        </Flex>
  )
}

export default AddForm
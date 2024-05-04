import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilterStr } from '../../redux/todoList/slice'

const FilterTailwind = () => {
  const dispatch= useDispatch()
  return (
    <Button.Group outline className='py-5 px-3 mx-auto flex justify-center'>
    <Button color="red" onClick={() => dispatch(setFilterStr('all'))}>All</Button>
    <Button color="red" onClick={() => dispatch(setFilterStr('active'))}>Active</Button>
    <Button color="red" onClick={() => dispatch(setFilterStr('completed'))}>Completed</Button>
  </Button.Group>
  )
}

export default FilterTailwind
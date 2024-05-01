import { Button } from 'flowbite-react'
import React from 'react'

const FilterTailwind = () => {
  return (
    <Button.Group outline className='py-5 px-3 mx-auto flex justify-center'>
    <Button color="red">All</Button>
    <Button color="red">Active</Button>
    <Button color="red">Completed</Button>
  </Button.Group>
  )
}

export default FilterTailwind
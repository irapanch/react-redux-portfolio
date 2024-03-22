import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Modal from '../components/Modal/Modal'

const HomePage = () => {
  const {isOpen,close,open, toggle} = useToggle()
  return (
    <div>HomePage
      <button onClick={open}>Open modal</button>
      {isOpen ? <Modal close={close}>Hello React</Modal> : null }
    </div>
  )
}

export default HomePage 
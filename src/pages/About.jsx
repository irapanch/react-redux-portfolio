import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Modal from '../components/Modal/Modal'
import Login from '../components/Login/Login'

const About = () => {
  // ---- показуємо модалку----
  //  не потрібно створювати стейт, функції close,open в цьому компоненті
  const {isOpen,close,open} = useToggle()

  // ---показуємо другу модалку ------------

  const {isOpen: two, toggle} = useToggle()
  return (
    <div>About
      <button onClick={open}>Open modal</button>
      {isOpen ? <Modal close={close}>Hello React</Modal> 
      : null }
      <button onClick={toggle}>Open modal 2</button>
      {two ? <Modal close={toggle}><Login/></Modal> 
      : null }
    </div>
  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFound = () => {
  return (
    <Wrapper ><h1>PageNotFound</h1>
    <p>You can go to <Link to='/'>Home</Link></p></Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    place-content: center;
    min-height: 100vh;
`
export default PageNotFound
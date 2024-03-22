import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useAuth from '../hooks/useAuth'

export const Navbar = () => {
  // ----Варіант автоматичного додавання Link через map масиву----
  const navArray = [
    {
      src: '/',
      title: 'HOME',
    },
    {
      src: '/about',
      title: 'ABOUT',
    },
    {
      src: '/users',
      title: 'USERS',
    },
    {
      src: '/posts',
      title: 'POSTS',
    },
  ]
const {isLoggedIn, logout, user} =  useAuth()
const navigate = useNavigate()
  return (
    <SideBar>
      {user && <h2>Hello {user}</h2>}
      {
navArray.map(({src, title})=><StyledLink key={src} to={src}>{title}</StyledLink>)
      }
      {/* --------- варіант ручного додавання  Link ----*/}
      {/* <StyledLink to='/'>HOME</StyledLink>
      <StyledLink to='/about'>ABOUT</StyledLink>
      <StyledLink to='/users'>USERS</StyledLink> */}
{isLoggedIn && <StyledLink to='/colorPicker'>Color Picker</StyledLink>}
    {isLoggedIn ? 
    <button onClick={logout}>Exit</button> :
    <button onClick={()=> navigate('/login')}>Login</button>}
    </SideBar>
  )
}

const SideBar = styled.nav`
    background-color: aliceblue;
    min-height: 100vh;
    border-right: 2px solid black;
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: fixed;
    width: 200px;
    padding: 40px 20px;
`
export const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
gap: 10px;
padding: 5px;
border-radius: 4px;
text-decoration: none;
color: black;
&.active {
    background-color: blue;
    color: white;
}
&:hover:not(.active){
    background-color: lightblue;
}
`
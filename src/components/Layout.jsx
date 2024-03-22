import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export  const Layout = () => {
  return (
    <LayoutWrapper>
        <Navbar/>
        <WrapperOutlet>
          <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet/>
          </Suspense>
            
        </WrapperOutlet>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
`
const WrapperOutlet =  styled.div`
    padding: 20px;
    padding-left: 290px;
`
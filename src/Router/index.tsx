import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../Pages/Home'

function Router() {
  return (
    <Container className="flex flex-row items-center justify-center w-full h-screen ">
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </Container>
  )
}

export default Router

const Container  = styled.div`
  background-color: #25252d;

`
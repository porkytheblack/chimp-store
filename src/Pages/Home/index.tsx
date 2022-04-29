import React from 'react'
import { Route, Routes } from 'react-router'
import styled from 'styled-components'
import Carousel from '../../Components/Carousel/Carousel1'
import Element1 from '../../Components/Carousel/Carousel1/Element1'
import Container1 from '../../Components/Containers/Container1'
import Container2 from '../../Components/Containers/Container2'
import Container4 from '../../Components/Containers/Container4'
import TopNav from './Nav'
import LandingPage from './SubPages'
import MainFilters from './SubPages/Filters'
import SelectedItem from './SubPages/SelectedItem/Index'
import SellerPage from './SubPages/SellerPage'
import ShoppingCart from './SubPages/ShoppingCart'
import SignIn from './SubPages/SignIn'
import SignUp from './SubPages/SignUp'
import ViewDesign from './SubPages/ViewDesign'


function Home() {
  return (
    <Container className='w-screen h-full flex flex-col items-center justify-start' > 
        <TopNav/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/shop" element={<MainFilters/>} /> 
          <Route path="/shop" element={<MainFilters/>} /> 
          <Route path="/shop" element={<MainFilters/>} /> 
          <Route path="/item" element={<SelectedItem/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/seller" element={<SellerPage/>}/>
          <Route path="/register" element={<SignUp/>}/>       
          <Route path="/login" element={<SignIn/>}/>  
          <Route path="/view-design" element={<ViewDesign/>}/>
        </Routes>
    </Container>
  )
}

export default Home

const Container  = styled.div`
    background: transparent;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      background: transparent;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb{
      background: #DB1c82;
      border-radius: 2px;
    }
`
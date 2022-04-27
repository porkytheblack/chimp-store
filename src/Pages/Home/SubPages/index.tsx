import React from 'react'
import styled from 'styled-components'
import Carousel from '../../../Components/Carousel/Carousel1'
import Container1 from '../../../Components/Containers/Container1'
import Container2 from '../../../Components/Containers/Container2'
import Container4 from '../../../Components/Containers/Container4'

function LandingPage() {
  return (
    <Container className="w-full flex flex-col items-center justify-start h-full " >
        <div className="flex flex-row mt-3 items-center justify-center w-full">
          <Carousel/>
        </div> 
        <Container2 title="Popular Stickers" more="More Stickers" >
          <Container1/>
          <Container1/>
          <Container1/>
          <Container1/>
          <Container1/>
          <Container1/>
          <Container1/>
          <Container1/>
        </Container2>
        <Container2 title="Popular Comics" more="More Comics">
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
        </Container2>
        <Container2 title="Popular Manga" more="More Manga">
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
          <Container4/>
        </Container2>
    </Container>
  )
}

export default LandingPage

const Container  = styled.div`

`
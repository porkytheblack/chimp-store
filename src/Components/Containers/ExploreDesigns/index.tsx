import React from 'react'
import styled from 'styled-components'
import Masonry from "@mui/lab/Masonry"
import alien_santa from "../../../assets/Explore/AlienSanta.png"
import coffee_cat from "../../../assets/Explore/CoffeeCat.png"
import girl_in_shades from "../../../assets/Explore/GirlInShades.png"
import green_background from "../../../assets/Explore/GreenBackground.png"
import ElementContainer from './Elements'

function ExploreDesigns() {
  return (    
    <Container columns={3} spacing={2}  >
        <ElementContainer description_text="Geek is Chick" image_src={alien_santa} />
        <ElementContainer description_text="Geek is Chick" image_src={coffee_cat} />
        <ElementContainer description_text="Geek is Chick" image_src={girl_in_shades} />
        <ElementContainer description_text="Geek is Chick" image_src={green_background} />
        <ElementContainer description_text="Geek is Chick" image_src={coffee_cat} />
        <ElementContainer description_text="Geek is Chick" image_src={girl_in_shades} />
        <ElementContainer description_text="Geek is Chick" image_src={coffee_cat} />
        <ElementContainer description_text="Geek is Chick" image_src={girl_in_shades} />
        <ElementContainer description_text="Geek is Chick" image_src={green_background} />
    </Container>
  )
}

export default ExploreDesigns

const Container  = styled(Masonry)`
    width: 100%;
`
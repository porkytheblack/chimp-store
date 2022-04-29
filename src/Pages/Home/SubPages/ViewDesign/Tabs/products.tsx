import React from 'react'
import Masonry from "@mui/lab/Masonry"
import styled from 'styled-components'
import Container1 from '../../../../../Components/Containers/Container1'

function Products() {
  return (
    <Container columns={4} spacing={1} >
        <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
    </Container>
  )
}

export default Products

const Container = styled(Masonry)`

`
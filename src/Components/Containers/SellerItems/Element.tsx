import React from 'react'
import styled from 'styled-components'
import vec from "../../../assets/test_images/vector.png"
import MyText from '../../Text/MyText'

function Element() {
  return (
    <Container className='flex SellerElement flex-col items-start justify-start' >
        <ItemContainer className="flex mb-1 w-full flex-col items-center justify-center" >
            <Pic src={vec} />
        </ItemContainer>
        <MyText fnt="fnt_16" className="mb-2" weight='inter_medium' color="white"  >
            Vector
        </MyText>
        <MyText fnt="fnt_16" weight='inter_semi_bold' color="white" >
            From $1.50
        </MyText>
    </Container>
  )
}

export default Element

const Container = styled.div`
    width: 210px;
    height: 270px;
`

const ItemContainer  = styled.div`
    background: rgba(41, 46, 58, 0.6);
    border-radius: 8px;
    height: 210px;

`
const Pic = styled.img`
    height: 170px;
    width: auto;
`
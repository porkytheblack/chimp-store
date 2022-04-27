import { AddShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function AddToCartButton() {
  return (
    <Container className="flex AddToCart flex-row items-center justify-between" >
        <AddShoppingCartOutlined className='fav_icon' />
        <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
            Add to cart
        </MyText>
    </Container>
  )
}

// "#DB1c82","#DF47be"

export default AddToCartButton

const Container  = styled.button`
    height: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    background-image: linear-gradient(90deg , #eb1484, #c81cc5);
    .fav_icon{
        height: 24px;
        width: 24px;
        color: white;
    }
`   
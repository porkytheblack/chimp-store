import { AddShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Container4() {
  return (
    <Container className="flex flex-col items-start justify-start" >
        <ImageContainer src="https://i.annihil.us/u/prod/marvel/i/mg/c/c0/6259cb69ad3fc/portrait_uncanny.jpg" />
        <div className="flex mt-1 flex-col w-full items-start justify-start">
            <MyText fnt="fnt_16" weight="inter_semi_bold" color="white" >
                Spider Gwen: Gwenverse #2
            </MyText>
            <MyText fnt="fnt_16" weight="inter_regular" color="white" >
                MARVEL
            </MyText>
            <div className="flex flex-row w-full items-center justify-between">
                <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
                     $1.29
                </MyText>
                <OtherButton>
                    <AddShoppingCartOutlined className='fav_icon' />
                </OtherButton>
            </div>
        </div>
    </Container>
  )
}

export default Container4


const Container  = styled.div`
    height: 450px;
    width: 225px;
    margin-right: 20px;
    margin-bottom: 20px;
    .fav_icon{
        height: 24px;
        width: 24px;
        color: #DB1c82;
    }
`

const ImageContainer  = styled.img`
    height: 335px;
    width: 225px;
    cursor: pointer;
    box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
    ${Container}:hover &{
        transform: translateY(-5px);
    }
`
const OtherButton  = styled.button`
    padding: 3px;
    height: 33px;
    width: 33px;
    border-radius: 16.5px;
    border: 1px solid  #DB1c82;
    :active{
        transform: translateY(2px);
        transform: scale(0.95);
    }
`

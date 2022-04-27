import { AddShoppingCartOutlined, FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import vector from "../../assets/test_images/vector.png"
import MyText from '../Text/MyText'

function Container1() {
  return (
    <Container className='flex flex-col items-center justify-start' >
        <TopContainer className="flex flex-col items-center justify-center" >
            <HeartButton>
                <FavoriteBorderOutlined className="fav_icon" />
            </HeartButton>
            <StickerImage src={vector} />
        </TopContainer>
        <div className="flex mt-1 flex-col w-full items-start justify-start">
            <MyText fnt="fnt_16" weight="inter_semi_bold" color="white" >
                Vector sticker
            </MyText>
            <MyText fnt="fnt_16" weight="inter_regular" color="white" >
                By don
            </MyText>
            <div className="flex flex-row mt-6 w-full items-center justify-between">
                <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
                    From $1.29
                </MyText>
                <OtherButton>
                    <AddShoppingCartOutlined className='fav_icon' />
                </OtherButton>
            </div>
        </div>
    </Container>
  )
}

export default Container1

const Container = styled.div`
    width: 236px;
    height: 336px;
    background: transparent;
    overflow: hidden;
    border-radius: 2px;
    .fav_icon{
        height: 24px;
        width: 24px;
        color: #DB1c82;
    }
    margin: 10px 10px;
`


const TopContainer = styled.div`
    height: 235px;
    width: 100%;
    background: #2a2e3a;
    overflow: hidden;
    position: relative;
    
`
const StickerImage  = styled.img`
    max-height: 195px;
    max-width: 190px;
    transition: 0.5s ease-out;
    ${TopContainer}:hover & {
        transform: scale(2);
    }
`
const HeartButton = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: white;
    z-index: 3;
    :active{
        transform: scale(0.95);
    }
    position: absolute;
    top: 10px;
    right: 10px;
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


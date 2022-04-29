import { FavoriteOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Button6 from '../../../Buttons/Button6'
import MyText from '../../../Text/MyText'

function ElementContainer({image_src, description_text}: {image_src: any, description_text: string}) {
  return (
    <Container className="flex flex-col items-start justify-start" >
        <ImageContainer  >
            <IconContainer>
                <FavoriteOutlined className="heart-icon" />
            </IconContainer>
            <StyleImage src={image_src} />
        </ImageContainer>
        <MyText fnt="fnt_16" className='mt-1 mb-1 w-full flex' weight="inter_semi_bold" color="black" >
            {description_text}
        </MyText>
        <Button6 text="Shop all products" />
    </Container>
  )
}

export default ElementContainer

const Container  = styled.button`
    width: 400px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    background: none;
    :active{
        outline: 2px solid blue;
    }
`

const ImageContainer  = styled.div`
    width: 400px;
    position: relative;
    border-radius: 10px;
    .heart-icon{
        height: 24px;
        width: 24px;
        color: black;
    }
`
const IconContainer = styled.button`
    padding: 10px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
`
const StyleImage  = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`

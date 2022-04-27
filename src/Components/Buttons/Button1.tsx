import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button1({children, text_colors}:{ children: string | ReactNode, text_colors: string[], }) {
    const [text_color, set_text_color] = useState<string>("")
    useEffect(()=>{
        set_text_color(text_colors[0])
        console.log(text_colors)
    }, [])
  return (
    <ButtonContainer onMouseEnter={()=>{
        set_text_color(text_colors[1])
    }} onMouseLeave={()=>{
        set_text_color(text_colors[0])
    }} className='flex flex-row items-center justify-center' >
        <MyText fnt="fnt_16" color={text_color} weight="inter_medium"  >
            {children}
        </MyText>
    </ButtonContainer>
  )
}

export default Button1

const ButtonContainer  = styled.button`
    height: 40px;
    border: none;
    background: transparent;
    padding: 10px 20px;
    border-radius: 4px;
`
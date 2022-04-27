import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button3({children, text_colors}:{ children: string | ReactNode, text_colors: string[], }) {
    const [text_color, set_text_color] = useState<string>("")
    useEffect(()=>{
        set_text_color(text_colors[0])
        console.log(text_colors)
    }, [])
  return (
    <ButtonContainer border={text_color} onMouseEnter={()=>{
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

export default Button3

const ButtonContainer  = styled.button<{border: string}>`
    height: 40px;
    border: ${({border}:{border: string})=>border} 1px solid;
    background: transparent;
    padding: 10px 20px;
    border-radius: 4px;
    margin-left: 10px;
    :active{
        transform: translateY(2px);
        transform: scale(0.95);
    }
`
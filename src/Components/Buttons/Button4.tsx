import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button4({children, text_colors, Icon}:{ children: string | ReactNode, text_colors: string[], Icon: React.ForwardRefExoticComponent<any> |  OverridableComponent<SvgIconTypeMap<{}, "svg">>}) {
    const [text_color, set_text_color] = useState<string>("")
    useEffect(()=>{
        set_text_color(text_colors[0])
        console.log(text_colors)
    }, [])
  return (
    <ButtonContainer icon_color={text_color} onMouseEnter={()=>{
        set_text_color(text_colors[1])
    }} onMouseLeave={()=>{
        set_text_color(text_colors[0])
    }} className='flex flex-col items-center justify-start' >
        <Icon className='icon' />
        <MyText fnt="fnt_16" color={text_color} weight="inter_medium"  >
            {children}
        </MyText>
        
    </ButtonContainer>
  )
}

export default Button4

const ButtonContainer  = styled.button<{icon_color: string}>`
    border: none;
    background: transparent;
    padding: 10px 20px;
    border-radius: 4px;
    .icon{
        width: 24px;
        height: 24px;
        color: ${({icon_color}:{icon_color:string})=>typeof icon_color != "undefined" ? icon_color : "black"} !important;
    }
`
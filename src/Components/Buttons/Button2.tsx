import React, { ReactNode } from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button2({children, gradients}:{children: string |ReactNode, gradients?: string[]}) {
  return (
    <ButtonContainer gradients={gradients}  className="flex flex-col items-center justify-center" >
        <MyText fnt="fnt_16" weight="inter_semi_bold" color="white" > 
            {children}
        </MyText>
    </ButtonContainer>
  )
}

export default Button2


const ButtonContainer  = styled.button<{gradients?: string[]}>`
    height: 40px;
    padding: 10px 20px;
    border-radius: 4px;
    :active{
        transform: translateY(2px);
        transform: scale(0.95);
    }
    background-image: ${
        ({gradients}:{gradients?: string[]})=>typeof gradients != "undefined" ? `linear-gradient( ${gradients[0]}deg , ${gradients[1]} , ${gradients[2]})` : "linear-gradient(90deg , #eb1484, #c81cc5)"};
`
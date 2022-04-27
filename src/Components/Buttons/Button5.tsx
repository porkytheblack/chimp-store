import React, { ReactNode } from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button5({children}:{children: string |ReactNode}) {
  return (
    <ButtonContainer  className="flex mr-3 flex-col items-center justify-center" >
        <MyText fnt="fnt_16" ellipsis={true} className="uppercase" weight="inter_semi_bold" color="white" > 
            {children}
        </MyText>
    </ButtonContainer>
  )
}

export default Button5

const ButtonContainer  = styled.button`
    height: 40px;
    padding: 10px 20px;
    border-radius: 4px;
    :active{
        transform: translateY(2px);
        transform: scale(0.95);
        background: #2a2e3a;
    }
    background: rgba(42, 46, 58, 0.86);

`
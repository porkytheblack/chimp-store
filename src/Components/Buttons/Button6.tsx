import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button6({text, to}:{text: string, to?:string}) {
  return (
    <Container className="flex flex-row items-center justify-between" >
        <MyText fnt="fnt_14" weight="inter_medium" color="white" >
            {text}
        </MyText>
        <ChevronRight className="chev"  />
    </Container>
  )
}

export default Button6

const Container = styled.button`
    height: 40px;

    .chev{
        height: 16px;
        width: 16px;
        color: black;
    }
    :hover{
        .chev{
            transform: translateX(4px);
        }
    }
`
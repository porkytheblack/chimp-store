import { ChevronLeftIcon } from '@heroicons/react/outline'
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MyText from '../Text/MyText'

function Button7() {
  return (
    <Container className="flex flex-row items-center justify-start" >
        <ChevIcon className="flex flex-col items-center justify-center" >
            <ChevronLeftIcon className='cicon' />
        </ChevIcon>
        <div className="flex flex-col items-center mr-3  ml-3 justify-center h-full ">
            <MAvatar src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className="flex flex-col pr-3 items-start justify-between">
            <MyText fnt="fnt_20" color="white" weight='inter_semi_bold' >
                don
            </MyText>
            <MyText fnt="fnt_16" color="gray"  >
                167 designs
            </MyText>
        </div>
    </Container>
  )
}

export default Button7

const Container  = styled.button` 
    height: 80px;
`

const ChevIcon = styled.div` 
    height: 100%;
    padding: 20px;
    .cicon{
        height: 30px;
        width: 30px;
        color: black;
    }
`   
const MAvatar = styled(Avatar)`
    height: 100px;
    width: 100px;
`
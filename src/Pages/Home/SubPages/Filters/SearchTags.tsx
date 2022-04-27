import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

function SearchTags({children, length}:{children: ReactNode[], length: number}) {
  return (
    <Container className="flex flex-row items-center justify-around" >
        <DirectionButton className='flex flex-row items-center justify-center' disabled={false} position='left' >
            <ChevronLeft className="chevron" />
        </DirectionButton>
        {children.map((child)=>child)}
        
        <DirectionButton className='flex flex-row items-center justify-center' disabled={false} position='right' >
            <ChevronRight className="chevron" />
        </DirectionButton>
    </Container>
  )
}

export default SearchTags

const Container  = styled.div`
    width: 100%;
    height: 80px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    position: relative;
    padding: 20px 40px;
    margin-bottom: 40px;
`

const DirectionButton = styled.button<{disabled: boolean, position: string}>`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${({disabled}:{disabled: boolean})=>disabled ? "rgba(255, 255, 255, 0.6)" : "white"};
    :active{
        transform: scale(0.95);
    }
    position: absolute;
    top: 0px;
    ${({position}:{position: string})=>position == "left" ? "left: 10px" : "right: 10px"};
    .chevron {
        height: 28px;
        width: 28px;
        color: black;
    }

`
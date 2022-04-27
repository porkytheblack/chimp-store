import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Button1 from '../Buttons/Button1'

function Container2({children, title, more}:{children: ReactNode[], title: string, more: string}) {
  return (
    <Container className="flex flex-col items-start justify-start  " >
        <Button1 text_colors={["#DB1c82","#DF47be"]} >
                {title}
        </Button1>
        <div className="flex flex-row w-full mt-4 mb-4 items-start justify-around flex-wrap" >
            {children.map((child)=>child)}
        </div>
        <Button1  text_colors={["#DB1c82","#DF47be"]} >
                {more}
        </Button1>
    </Container>
  )
}

export default Container2

const Container  = styled.div`
    width: calc(100%-160px);
    min-width: 1000px;
    margin: 20px 80px; 
    border-bottom: 1px solid #DF47be;
`
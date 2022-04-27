import React, { ReactNode } from 'react'
import styled from 'styled-components'

function List1({children}:{children: ReactNode[]}) {
  return (
    <Container>
        {children.map((child, key)=>(
            <CustomListItem key={key} >
                {child}
            </CustomListItem>
        ))}
    </Container>
  )
}

export default List1

const Container  = styled.ol`

`
const CustomListItem = styled.li`
    &:before{
        content: ".";
    }
`
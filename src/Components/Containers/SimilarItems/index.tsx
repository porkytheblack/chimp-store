import React from 'react'
import styled from 'styled-components'
import MyText from '../../Text/MyText'
import Container1 from '../Container1'

function SimilarItemsContainer() {
  return (
    <Container className="flex flex-col items-start justify-start w-full " >
        <div className="flex mb-3 top-container w-full flex-col items-start justify-start">
            <MyText fnt="fnt_18" className="mb-2" color="white" weight='inter_semi_bold' >
                Similar Designs
            </MyText>
            <MyText fnt="fnt_16" color="white" weight='inter_medium' >
                Explore similar designs from over 9,000 independent artists
            </MyText>
        </div>
        <DisplayContainer className="w-full flex flex-col items-start justify-start p-2" >
            <div className="flex flex-row items-center justify-start display-row">
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
            </div>
            <div className="flex flex-row items-center justify-start display-row">
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
            </div>
        </DisplayContainer>
    </Container>
  )
}

export default SimilarItemsContainer

const Container  = styled.div`
    padding: 20px;
    .top-container{
        border-radius: 10px;
        padding: 10px;
        background-color: #292e3a;

    }
`

const DisplayContainer  = styled.div`
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    ::-webkit-scrollbar-thumb{
        display: none;
    }
    .display-row{
        height: 350px;
        margin-bottom: 10px;
        width: 100%;
    }
`
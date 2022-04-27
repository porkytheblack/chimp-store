import React from 'react'
import styled from 'styled-components'
import MyText from '../../../../../Components/Text/MyText'
import RowElement from './RowElement'

function ShoppingCartTable() {
  return (
    <Container className="w-full flex flex-col itemsd-center justify-start" >
        <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center w-1/2 justify-start">
                <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
                    ITEM
                </MyText>
            </div>
            <div className="flex flex-row w-1/2 items-center justify-start">
                <div className="flex w-1/3 flex-row items-center justify-center">   
                    <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
                        QUANTITY
                    </MyText>
                </div>
                <div className="flex w-1/3 flex-row items-center justify-center">
                    <MyText fnt="fnt_18" weight="inter_semi_bold" color="white" >
                        PRICE
                    </MyText>
                </div>
                <div className="flex w-1/3 flex-row items-center justify-center">

                </div>
            </div>
        </div>
        <RowElement/>
    </Container>
  )
}

export default ShoppingCartTable

const Container  = styled.div`
`
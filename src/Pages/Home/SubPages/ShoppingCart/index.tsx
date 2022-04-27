import { Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Button2 from '../../../../Components/Buttons/Button2'
import MyText from '../../../../Components/Text/MyText'
import ShoppingCartTable from './ShoppingCartTable'

function ShoppingCart() {
  return (
    <Container className="w-4/5 flex  flex-col items-center justify-start h-full" >
        <div className="flex flex-col items-center justify-start w-full">
            <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                Your Cart
            </MyText>
            <Divider type="horizontal" className="bg-gray-400" />
        </div>
        <ShoppingCartTable/>
        <div className="flex flex-col mt-2 items-center justify-start w-full">
            <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                Your Summary
            </MyText>
            <Divider type="horizontal" className="bg-gray-400" />
        </div>
        <div className="flex flex-col mb-4 items-center justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <MyText fnt="fnt_18" weight="inter_medium" color="white" >
                    2 ITEMS
                </MyText>
                <MyText fnt="fnt_18"  color="white" >
                    $3.45
                </MyText>
            </div>
            <div className="flex flex-row mt-1 items-center justify-between w-full">
                <MyText fnt="fnt_18" weight="inter_medium" color="white" >
                    SHIPPING
                </MyText>
                <MyText fnt="fnt_18"  color="white" >
                    $3.45
                </MyText>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <MyText fnt="fnt_18" weight="inter_medium" color="white" >
                    SUBTOTAL
                </MyText>
                <MyText fnt="fnt_18"  color="white" >
                    $3.45
                </MyText>
            </div>
        </div>
            <Button2>
                Checkout
            </Button2>
            
    </Container>
  )
}

export default ShoppingCart

const Container  = styled.div`
    padding: 50px 0px;
`
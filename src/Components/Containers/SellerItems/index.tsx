import { Avatar } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Button1 from '../../Buttons/Button1'
import Button2 from '../../Buttons/Button2'
import MyText from '../../Text/MyText'
import Element from './Element'

function SellerItems() {
  return (
    <Container className='flex flex-col items-start justify-start w-full' >
        <div className="flex flex-row top-header items-center justify-start w-full">
            <Avatar className='mr-2!' src={<AvatarImage src="https://joeschmoe.io/api/v1/random" />} />
            <div className="flex h-10 ml-4 mr-4 flex-col items-start justify-start">
                <MyText fnt="fnt_18"  weight="inter_medium" color="white" >
                    Don
                </MyText>
                <MyText fnt="fnt_18" weight="inter_regular" color="gray" >
                    Somwhere, far away
                </MyText>
            </div>
            <div className="flex flex-row items-center justify-start h-full">
                <Button2  >
                    FOLLOW
                </Button2>
            </div>
        </div>     
        <ItemsContainer className="flex mt-3 flex-row items-center justify-start" >
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
        </ItemsContainer>
        <Button1 text_colors={["#DB1c82","#DF47be"]} >
                View Don's Shop
        </Button1>
    </Container>
  )
}

export default SellerItems

const Container  = styled.div`
    padding: 20px 20px;    
    
    border-radius: 10px;
    .top-header{
        background:  #292e3a;
        height: 80px;
        border-radius: 8px;
        padding: 0px 20px;
    }
`

const AvatarImage  = styled.img`
    width: 100;
    height: auto;
`

const ItemsContainer  =styled.div`
    height: 300px;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none !important;
    }
    ::-webkit-scrollbar-thumb{
        display: none;
    }
    position: relative;
    .SellerElement{
        margin-right: 20px;
    }
`
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Button7 from '../../../../Components/Buttons/Button7'
import alien_santa from "../../../../assets/Explore/AlienSanta.png"
import MyText from '../../../../Components/Text/MyText'
import { FavoriteBorderOutlined, ShareOutlined } from '@mui/icons-material'
import { Tabs } from 'antd'
import Products from './Tabs/products'
import Comments from './Tabs/comments'

const {TabPane} = Tabs         

function ViewDesign() {
  return (
    <Container className='flex flex-col items-center justify-start w-full h-full' >
        <TopContainer className="flex flex-col w-full items-start justify-start" >
            <div className="flex flex-row items-center justify-start">
                <Button7/>
            </div>
            <div className="flex topcontainer flex-row items-center justify-center w-full">
                <ImageContainer src={alien_santa} />
                <div className="flex flex-col items-start justify-center">
                    <MyText className='mb-2' fnt="fnt_36" color="white" weight="inter_semi_bold" >
                        Boop!
                    </MyText>
                    <div className="flex flex-row items-center justify-start">
                        <div className="flex  flex-row items-center mt-3 justify-start w-full">
                                <MyText fnt="fnt_16" color="white" className='mr-2' >
                                    Designed and sold by    
                                </MyText>
                                <MyText fnt="fnt_16" color="#e3e1e3" >
                                    don
                                </MyText>
                            </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <ButtonIcon>
                            <FavoriteBorderOutlined className='micon' />
                        </ButtonIcon>
                        <ButtonIcon>
                            <ShareOutlined className="micon" />
                        </ButtonIcon>
                    </div>
                </div>
            </div>   
        </TopContainer> 
        <BottomContainer className="flex flex-col w-full items-start justify-start" >
                <CustomTabs centered={true} defaultActiveKey="1" className='w-full' >
                <CustomTabPane tab={
                    <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                        Shop 58 products
                    </MyText>
                }key="1" >
                    <Products/>
                </CustomTabPane>
                <CustomTabPane tab={
                        <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                            Comments
                        </MyText>
                } key="2" >
                    <Comments/>
                    </CustomTabPane>         
            </CustomTabs>
        </BottomContainer>
    </Container>
  )
}

export default ViewDesign

const Container  = styled.div`

`

const TopContainer  = styled.div`
    padding: 80px calc(100%-80%);
    background: transparent;
    .topcontainer{
        padding: 100px 100px;
    }
    
`
const BottomContainer  = styled.div`
    padding: 100px 50px;
`

const ImageContainer  = styled.img`
    width: 400px;
    height: auto;
    position: relative;
    border-radius: 10px;
    margin-right: 100px;
    .heart-icon{
        height: 24px;
        width: 24px;
        color: black;
    }
`

const ButtonIcon = styled.button`
    padding: 10px;
    border-radius: 50%;
    margin-right: 10px;
    .micon{
        height: 24px;
        width: 24px;
        color: white;
    }
    :hover{
        background: #292e3a;
    }
`


const CustomTabs = styled(Tabs)`
    .ant-tabs-tab-active{
        .fnt_18{
            color: #DF47be !important;
        }
        
    }
`

const CustomTabPane = styled(TabPane)`


`

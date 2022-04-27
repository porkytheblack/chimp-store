import { Circle } from '@mui/icons-material'
import { Tabs } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Button1 from '../../../../Components/Buttons/Button1'
import MyText from '../../../../Components/Text/MyText'
import Banner from './Banner'
import SellerProducts from './SellerProducts'

const {TabPane} = Tabs

function SellerPage() {
  return (
    <Container className="w-full flex flex-col items-center justify-start" >
        <div className="flex w-full mb-4 flex-col items-center justify-start">
            <Banner/>
            <div className="flex flex-row items-ceneter justify-center w-full">
                <MyText fnt="fnt_20" color="white" weight='inter_semi_bold' >
                    don
                </MyText>
            </div>
            <div className="flex flex-row items-center justify-center w-full">
                <MyText fnt="fnt_16" color="gray" className="mr-2" >
                    Somwhere, really far from here
                </MyText>
                <Circle className="circle" />
                <MyText fnt="fnt_16" color="gray" className="mr-2 ml-2" >
                    331 designs
                </MyText>
                <Circle className="circle" />
                <Button1 text_colors={["#DB1c82","#DF47be"]} >
                    View don's profile
                </Button1>
            </div>
        </div>
       <CustomTabs centered={true} defaultActiveKey="1" className='w-full' >
           <CustomTabPane tab={
               <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                   Shop Products
               </MyText>
           }key="1" >
               <SellerProducts/>
           </CustomTabPane>
           <CustomTabPane tab={
                <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                    Explore Designs
                </MyText>
           } key="2" >
               
               </CustomTabPane>
       </CustomTabs>
    </Container>
  )
}

export default SellerPage

const Container  = styled.div`
    padding: 20px 20px;
    .circle{
        height: 10px;
        width: 10px;
        color: gray;
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
import React from 'react'
import styled from 'styled-components'
import {Menu, Select} from "antd"
import MyText from "../../../../Components/Text/MyText"
import Button5 from '../../../../Components/Buttons/Button5'
import Container1 from '../../../../Components/Containers/Container1'

const {Option} = Select

function SellerProducts() {
    
  return (
    <Container className='flex flex-row items-start justify-start w-full h-full' >
        <FilterSection className="flex h-full flex-col items-start justify-start" >
            <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                Filters (3)
            </MyText>
            <MenuContainer mode="inline" >
                <CustomSubMenu title={
                    <MyText fnt="fnt_16" color="white" weight="inter_semi_bold" >
                        Category
                    </MyText>
                } >
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            All Categories
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Stickers
                        </MyText>
                    </CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title={
                    <MyText fnt="fnt_16" color="white" weight="inter_semi_bold" >
                        Finish
                    </MyText>
                } >
                     <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Matte
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Glossy
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Transparent
                        </MyText>
                    </CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title={
                    <MyText fnt="fnt_16" color="white" weight="inter_semi_bold" >
                        Price
                    </MyText>
                } >
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            $
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            $$
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            $$
                        </MyText>
                    </CustomMenuItem>
                </CustomSubMenu>
                <CustomSubMenu title={
                    <MyText fnt="fnt_16" color="white" weight="inter_semi_bold" >
                        Artwork Medium
                    </MyText>
                } >
                     <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            All Mediums
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Designs and Illustrations
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Digital Art
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Drawing
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Painting and Mixed Media
                        </MyText>
                    </CustomMenuItem>
                    <CustomMenuItem>
                        <MyText fnt="fnt_16" color="white" weight="inter_medium" >
                            Photography
                        </MyText>
                    </CustomMenuItem>
                </CustomSubMenu>
            </MenuContainer>
        </FilterSection>
        <DisplaySectionContainer className="flex  flex-col items-start justify-start h-full" >
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-end justify-start w-1/2 ">
                    <MyText fnt="fnt_20" weight="inter_semi_bold" color="white" >
                        Superhero Stickers
                    </MyText>
                    <MyText fnt="fnt_16" className="ml-3" color="white" >
                        300 Results
                    </MyText>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <CustomSelect defaultValue="Most Relevant" style={{width: 200}} >
                        <CustomOption value="Most Relevant" >
                            <MyText fnt="fnt_18" color="white" weight="inter_medium" >
                                Most Relevant
                            </MyText>
                        </CustomOption>
                        <CustomOption value="Trending" >
                            <MyText fnt="fnt_18" color="white" weight="inter_medium" >
                                Trening
                            </MyText>
                        </CustomOption>
                        <CustomOption value="Newest" >
                            <MyText fnt="fnt_18" color="white" weight="inter_medium" >
                                Newest
                            </MyText>
                        </CustomOption>
                        <CustomOption value="Best Selling" >
                            <MyText fnt="fnt_18" color="white" weight="inter_medium" >
                                Best Selling
                            </MyText>
                        </CustomOption>
                    </CustomSelect>
                </div>
            </div>
            <div className="flex flex-row items-start justify-around w-full flex-wrap">
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
                <Container1/>
            </div>
        </DisplaySectionContainer>
    </Container>
  )
}

export default SellerProducts

const FilterSection = styled.div`
    width: 300px;
    height: 100%;
    padding: 20px 10px;
`

const DisplaySectionContainer = styled.div`
    width: calc(100%-300px);
    padding: 10px 10px;
    .ant-select-dropdown{
        background: none !important;  
        > * {
            background: none !important; 
        }
    }
`

const Container = styled.div`

`

const MenuContainer  = styled(Menu)`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: transparent !important;
    border-right: none !important;
`

const CustomMenuItem = styled(Menu.Item)`
    background: none !important;
    border-right: none !importnat;
    // &:after{
    //     background: none !important;
    //     border: none !important;
    // }
`

const CustomSubMenu = styled(Menu.SubMenu)`
    .ant-menu-sub{
        background: none !important;
    }
    .ant-menu-inline {
        background: none !important;
    }
`

const CustomSelect = styled(Select)`
    background: none !important;
    > * {
        background: none !important;  
    }
    .ant-select-dropdown{
        background: none !important;  
    }
`
const CustomOption = styled(Option)`
    background: none !important;
`

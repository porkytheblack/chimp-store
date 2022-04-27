import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import back_image from "../../../../assets/Backgrounds/backImage.png"
import pic from "../../../../assets/test_images/vector.png"
import male from "../../../../assets/Backgrounds/man_in_white_tshirt.png"
import female from "../../../../assets/Backgrounds/lady_in_white_tshirt.png"
import MyText from "../../../../Components/Text/MyText"
import {List, Progress, Select} from "antd"
import AddToCartButton from '../../../../Components/Buttons/AddToCartButton'
import List1 from '../../../../Components/Lists/List1'
import { Circle, Star } from '@mui/icons-material'
import ParagraphText from '../../../../Components/Text/Paragraph'
import SellerItems from '../../../../Components/Containers/SellerItems'
import SimilarItemsContainer from '../../../../Components/Containers/SimilarItems'

const {Option} = Select

const test_features: string[] = [
    "Decorate and personalize laptops, windows, and more",
    "Removable, kiss-cut vinyl stickers",
    "Super durable and water-resistant",
    "1/8 inch (3.2mm) white border around each design",
    "Matte finish",
    "Sticker types may be printed and shipped from different locations"
]



function SelectedItem() {

    const side_ref  = useRef<any>(null)
    const [is_sticky, set_sticky] = useState<boolean>(true)

    useEffect(() => {
        if(typeof  side_ref.current?.offsetTop != "undefined"){
            console.log(side_ref.current?.offsetTop , " vs " , window.scrollY)
            if(window.scrollY >= side_ref.current?.offsetTop) {
                console.log("triggered")
                set_sticky(true)
            }else{
                set_sticky(false)
                console.log("Killed")
            }
        }
      return () => {
        
      }
    }, [side_ref.current?.offsetTop])
    

  return (
    <Container className="w-full h-full flex  flex-col items-center justify-start" >
        <div className="flex flex-row items-start relative w-full">
            <InfoContainer className='flex   flex-col items-start w-2/3 justify-start' >
                <div className="flex flex-row items-start justify-start w-full">
                    <BackImage >
                        <Pic src={pic} />
                    </BackImage> 
                    <div className="flex flex-col items-center justify-start h-full ">
                        <Shirt src={male} >
                            <ShirtPic  top={40} left={32} src={pic} />
                        </Shirt>
                        <Shirt src={female} >
                            <ShirtPic  top={40} left={32} src={pic} />
                        </Shirt>
                    </div>
                </div>
                <div className="flex flex-row p-5 w-full items-start justify-between">
                    <div className="flex flex-col items-start justify-start w-1/2">
                        <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                            Features
                        </MyText>
                        <List bordered={false}  className="w-full" itemLayout='horizontal' dataSource={test_features} renderItem={(item, index)=>(
                            <List.Item className="w-full" > 
                                <List.Item.Meta title={   
                                    <MyText fnt="fnt_16" color="white" weight="inter_semi_bold" >
                                        {item}
                                    </MyText>
                                } avatar={<Circle className="list-circle" />} />
                            </List.Item>
                        )} />
                    </div>
                    <div className="flex flex-col pl-3 items-start justify-start w-1/2">
                        <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                            Reviews
                        </MyText>
                        <div className="flex flex-col w-full items-start justify-start mt-4">
                            <div className="flex flex-row mt-5 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-1/3 ">
                                    {[1,2,3,4,5].map((i)=>(
                                        <Star className="review_star" />
                                    ))}
                                </div>
                                <div className="flex flex-row mt-5 items-center justify-start w-2/3 ">
                                        <Progress showInfo={false} percent={80} />
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-1/3 ">
                                    {[1,2,3,4].map((i)=>(
                                        <Star className="review_star" />
                                    ))}
                                </div>
                                <div className="flex flex-row mt-5 items-center justify-start w-2/3 ">
                                        <Progress showInfo={false} percent={20} />
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-1/3 ">
                                    {[1,2,3].map((i)=>(
                                        <Star className="review_star" />
                                    ))}
                                </div>
                                <div className="flex flex-row items-center justify-start w-2/3 ">
                                        <Progress showInfo={false} percent={8} />
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-1/3 ">
                                    {[1,2].map((i)=>(
                                        <Star className="review_star" />
                                    ))}
                                </div>
                                <div className="flex flex-row items-center justify-start w-2/3 ">
                                        <Progress showInfo={false} percent={0} />
                                </div>
                            </div>
                            <div className="flex flex-row mt-5 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-1/3 ">
                                    {[1].map((i)=>(
                                        <Star className="review_star" />
                                    ))}
                                </div>
                                <div className="flex flex-row items-center justify-start w-2/3 ">
                                        <Progress showInfo={false} percent={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DescriptionContainer className="flex flex-col items-start justify-start w-full mt-2" >
                        <div className="flex flex-row w-full items-start justify-start">
                            <DescriptionImage src={pic} />   
                            <div className="flex flex-col items-start justify-start h-full w-2/3 ">
                                <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                                    Vector
                                </MyText>
                                <div className="flex  flex-row items-center mt-3 justify-start w-full">
                                    <MyText fnt="fnt_16" color="white" className='mr-2' >
                                        Designed and sold by    
                                    </MyText>
                                    <MyText fnt="fnt_16" color="#e3e1e3" >
                                        don
                                    </MyText>
                                </div>
                            </div>
                        </div>
                        <ParagraphText className="mt-2" fnt="fnt_16" weight="inter_medium" color="white" >
                                I am vector,... with both magnitude and direction, ... ohh yeah!
                        </ParagraphText>
                </DescriptionContainer>

            </InfoContainer>
            <div className="flex flex-col sticky-container items-center relative justify-start w-1/3 p-2 ">
                <div id="side-container" ref={side_ref} className={`flex flex-col items-start  side-container w-full justify-start sticky`}>
                        <MyText fnt="fnt_20" weight="inter_semi_bold" color="white" >
                            Vector Sticker
                        </MyText>
                        <div className="flex  flex-row items-center mt-3 justify-start w-full">
                            <MyText fnt="fnt_16" color="white" className='mr-2' >
                                Designed and sold by    
                            </MyText>
                            <MyText fnt="fnt_16" color="#e3e1e3" >
                                don
                            </MyText>
                        </div>
                        <MyText className="mt-5" fnt="fnt_36" weight="inter_medium" color="white" >
                            $3.6
                        </MyText>
                        <div className="flex flex-col items-start justify-start ">
                            <MyText fnt="fnt_20" weight='inter_semi_bold' color="white"  > 
                                Finish
                            </MyText>
                            <CustomSelect defaultValue={['matte']} >
                                <CustomOption key="matte"  >
                                    <MyText fnt="fnt_18" weight="inter_medium"  >
                                        Matte
                                    </MyText>   
                                </CustomOption>
                                <CustomOption key="glossy" > 
                                <MyText fnt="fnt_18" weight="inter_medium"  >
                                    Glossy
                                </MyText>
                                </CustomOption>
                            </CustomSelect>
                        </div>
                        <div className="flex flex-col mt-5 items-start justify-start ">
                            <MyText fnt="fnt_20" weight='inter_semi_bold' color="white"  > 
                                Size
                            </MyText>
                            <CustomSelect defaultValue={['small']} >
                                <CustomOption key="small"  >
                                    <MyText fnt="fnt_18" weight="inter_medium"  >
                                        Small
                                    </MyText>   
                                </CustomOption>
                                <CustomOption key="medium" > 
                                    <MyText fnt="fnt_18" weight="inter_medium"  >
                                        Medium
                                    </MyText>
                                </CustomOption>
                                <CustomOption key="large" > 
                                    <MyText fnt="fnt_18" weight="inter_medium"  >
                                        Large
                                    </MyText>
                                </CustomOption>
                                <CustomOption key="extra_large" > 
                                    <MyText fnt="fnt_18" weight="inter_medium"  >
                                        Extra Large
                                    </MyText>
                                </CustomOption>
                            </CustomSelect>
                        </div>
                        <div className="flex flex-row mt-4 items-center justify-start w-full">
                        <AddToCartButton/>
                        </div>
                    
                </div>
            </div>
              
        </div>
        <SellerItems/>
        <SimilarItemsContainer/>
    </Container>
  )
}

export default SelectedItem

const Container  = styled.div`
    .side-container{
        padding: 20px;
        background: #292e3a;
        border-radius: 4px;
        margin: 5px;
        height: 650px;
    }
    .sticky{
        position: sticky;
        right: 0px;
        top: 0px;
    }
    .AddToCart{
        width: 80%;
    }
    .list-circle{
        color: white;
        height: 10px !important;
        width: 10px !important;
    }
    .ant-list-item{
        border: none !important;
    }
    .sticky-container{
        height: 1325px;
    }
    .review_star{
        width: 16px !important;
        height: 16px !important;
        color: yellow;
        margin-right: 5px;
    }
`

const InfoContainer  = styled.div`

`

const BackImage  = styled.div`
    height: 650px;
    width: 650px;  
    position: relative;
    background: url(${back_image});
    background-size: 600px auto;
    background-repeat: no-repeat;

`
const Pic = styled.img`
    position: absolute;
    height: 180px;
    width: auto;
    left: 40%;
    top: 40%;
`

const Shirt = styled.div<{src: any}>`
    height: 325px;
    width: 400px;       
    position: relative;
    background: url(${({src}:{src: any})=>src});
    background-size: cover;
`
const ShirtPic  = styled.img<{left: number, top: number}>`
    position: absolute;
    height: 180px;
    width: auto;
    left: ${({left}:{left: number})=>left}%;
    top: ${({top}:{top: number})=>top}%;

`

const CustomSelect = styled(Select)`
    background: none !important;
    width: 400px;
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

const DescriptionContainer  = styled.div`
    background: #292e3a;
    border-radius: 8px;
    padding: 10px;
`
const DescriptionImage = styled.img`
    width: 100px;
    height: auto;
`
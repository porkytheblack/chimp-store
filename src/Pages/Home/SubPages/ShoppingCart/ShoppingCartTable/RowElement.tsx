import { MinusIcon, PlusIcon, XCircleIcon } from '@heroicons/react/outline'
import { Divider } from 'antd'
import React from 'react'
import styled from 'styled-components'
import vector from "../../../../../assets/test_images/vector.png"
import MyText from '../../../../../Components/Text/MyText'

function RowElement() {
  return (
    <Container className="flex flex-row items-center justify-between" >
        <div className="flex flex-row items-start justify-start w-1/2 ">
            <ItemImageContainer className="flex mr-3 flex-row items-center justify-center" >
                <ItemImage src={vector} />
            </ItemImageContainer>
            <div className="flex flex-col items-start justify-start">
                <MyText fnt="fnt_20" color="gray" >
                    STICKER
                </MyText>
                <MyText className="mt-4" color="gray" fnt="fnt_18"  >
                    Small (3.0" x 3.5")
                </MyText>
            </div>
        </div>
        <div className="flex flex-row w-1/2 items-center justify-between">
            <div className="flex flex-row w-1/3 items-center justify-center h-11 ">
                <MinusIcon className="h-6 w-6 cursor-pointer text-gray-600 mr-1" />
                <Divider className='bg-white' style={{height: 40}} type="vertical" />
                <MyText fnt="fnt_18" className='mr-1 ml-1' color="white" > 
                    2
                </MyText>
                <Divider className='bg-white' style={{height: 40}} type="vertical" />
                <PlusIcon className="h-6 w-6 cursor-pointer text-gray-600 "  />
            </div>
            <div className="flex flex-row w-1/3 items-center justify-center h-11 ">
                <MyText fnt="fnt_18" className='mr-1' weight="inter_medium" color="white" > 
                    $60.0
                </MyText>
            </div>
            <div className="flex flex-row w-1/3 items-center justify-center h-11 ">
                <XCircleIcon className="h-6 w-6 text-gray-600 "  />
            </div>
        </div>
    </Container>
  )
}

export default RowElement

const Container  = styled.div`
    padding: 20px 0px;
`

const ItemImageContainer  = styled.div`
    border-radius: 10px;
    height: 180px;
    width: 180px;
    background: #292e3a;    
`

const ItemImage  = styled.img`
    height: 100px;
    width: auto;
`


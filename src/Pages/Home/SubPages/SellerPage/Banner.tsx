import { Avatar } from 'antd'
import React from 'react'
import styled from 'styled-components'
import back from "../../../../assets/Backgrounds/sellerbackground.png"

function Banner() {
  return (
    <BannerContainer>
        <MAvatar src="https://joeschmoe.io/api/v1/random"  style={{height: 100, width: 100}} />
    </BannerContainer>
  )
}

export default Banner

const BannerContainer  = styled.div`
    border-radius: 10px;
    height: 300px;
    width: 90%;
    background: url(${back});
    background-size: cover;
    repeat: no-repeat;
    position: relative;
    margin-bottom: 60px;
`

const MAvatar  = styled(Avatar)`
    position: absolute;
    bottom: -50px;
    left: 45%;
    background-color: #292e3a;
`
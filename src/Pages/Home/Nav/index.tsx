import React from 'react'
import styled from 'styled-components'
import Button1 from '../../../Components/Buttons/Button1'
import Button2 from '../../../Components/Buttons/Button2'
import Button3 from '../../../Components/Buttons/Button3'
import Search1 from '../../../Components/Search/Search1'
import {ReactComponent as ChimpLogo} from "./../../../assets/logo/ape-origin.svg"

function TopNav() {
  return (
    <Container className="flex w-full flex-row items-center justify-between" >
        <div className="flex flex-row h-full items-center justify-between">
            <ChimpLogo className="chimp-logo cursor-pointer" />
            <Search1/>
        </div>
        <div className="flex flex-row w-1/2 h-full items-center justify-start">
            <Button1 text_colors={["#DB1c82","#DF47be"]} >
                Comics
            </Button1>
            <Button1 text_colors={["#DB1c82","#DF47be"]} >
                Manga
            </Button1>
            <Button1 text_colors={["#DB1c82","#DF47be"]} >
                Stickers
            </Button1>
            <Button1 text_colors={["#DB1c82","#DF47be"]} >
                Others
            </Button1>
            <Button2>
                SignUp
            </Button2>
            <Button3 text_colors={["#DB1c82","#DF47be"]} >
                Sign In
            </Button3>
        </div>
    </Container>
  )
}

export default TopNav

const Container = styled.div`
    height: 80px;
    padding: 10px 20px;
    border-bottom: rgba(223, 71, 190, 0.21) 0.2px solid;
`
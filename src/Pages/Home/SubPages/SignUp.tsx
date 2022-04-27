import { Divider, Form, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Button1 from '../../../Components/Buttons/Button1'
import Button2 from '../../../Components/Buttons/Button2'
import MyText from '../../../Components/Text/MyText'

function SignUp() {
  return (
    <Container className="flex flex-col items-center justify-start w-4/5 h-full pt-8" >
        <MyText fnt="fnt_20" color="white" weight="inter_semi_bold" >
            Join ape-origin
        </MyText>
        <div className="flex flex-col items-center justify-start mt-4">
            <Form layout='vertical' name="signup"  >
                <Form.Item name="email"  >
                    <MInput placeholder='Email'  />
                </Form.Item>
                <Form.Item name="username"  >
                    <MInput placeholder='Username'  />
                </Form.Item>
                <Form.Item name="password"  >
                    <MInput placeholder='Password'  />
                </Form.Item>
                <Form.Item name="submit">
                    <Button2>
                        Sign Up
                    </Button2>
                </Form.Item>
            </Form>
        </div>
        <Divider style={{width: 400, color: "white"}} > 
            <MyText fnt="fnt_18" color="white" weight="inter_semi_bold" >
                Or
            </MyText>
        </Divider>
        <div className="flex flex-row w-full items-center justify-center">
            <Button1 text_colors={["#DB1c82","#DF47be"]} >
                Log In
            </Button1>
        </div>
    </Container>
  )
}

export default SignUp 

const Container = styled.div`

`
const MInput = styled(Input)`
    height: 40px;
    width: 400px;
    background: transparent !important;
`
import React from 'react'
import styled from 'styled-components'
import {SearchIcon} from "@heroicons/react/outline"
import { Input } from 'antd'

function Search1() {
  return (
    <Container className="flex flex-row items-center justify-start" >
      <SearchIcon className="big-icon mr-2" />
      <InputContainer className="h-full" color="white" placeholder="Search for, stickers, posters, comics, mangas and more... "   />
    </Container>
  )
}

export default Search1

const Container  = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  background: #1b1a21;
  height: 50px;
  width: 350px;
`

const InputContainer  = styled(Input)`
  width: calc(100%-36px);
  background: none;
  outline: none;
  border: none;
  :focus{
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  color: white !important;
`
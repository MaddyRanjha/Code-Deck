import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'

export const ClickButton =styled.div`
font-size: 0.5rem;
color:white;
display:flex;
align-item:center;
justify-content: center;
margin:1rem;
`
export const Btn = styled.button`
padding:0.1rem;
`

const NewFolder = () => {
  return (
    <>
      <Header>
        <Heading>Create New Folder</Heading>
        <IoCloseSharp />
      </Header>
      
      <p>Enter Folder Name: <input type="text" /></p>
      
      
      <ClickButton>
              <Btn>Create New Folder</Btn>
      </ClickButton>
    </>
  )
}

export default NewFolder
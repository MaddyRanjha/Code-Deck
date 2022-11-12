import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'

const ClickButton =styled.div`
font-size: 0.5rem;
color:white;
display:flex;
align-item:center;
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
      <button>Create New Folder</button>
      </ClickButton>
    </>
  )
}

export default NewFolder
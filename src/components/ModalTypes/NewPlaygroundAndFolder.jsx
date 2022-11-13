import React from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'


export const ClickButton =styled.div`
font-size: 0.5rem;
display:flex;
align-item:center;
justify-content: space-between;
margin:0.5rem;
`
export const Btn = styled.button`
padding:0.1rem;
`

const NewPlaygroundAndFolder = () => {
  return (
    <>
      <Header>
        <Heading>Create New Playground & Folder</Heading>
        <IoCloseSharp />
      </Header>
      <p>Enter Folder Name: <input type="text" /></p>
      <p>Enter PLayground: <input type="text" /></p>
      <ClickButton>
      <select name="" id="">
        <option value="c++">C++</option>
        <option value='java'>Java</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
      <Btn>
        Create New Playground
      </Btn>
      </ClickButton>
    </>
  )
}

export default NewPlaygroundAndFolder
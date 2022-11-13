import React from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { ClickButton,Btn } from './NewPlaygroundAndFolder'


const NewPlayground = () => {
  return (
    <>
      <Header>
        <Heading>Create New Playground</Heading>
        <IoCloseSharp />
      </Header>
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

export default NewPlayground
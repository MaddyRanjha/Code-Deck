import React from 'react'
import styled from 'styled-components'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import Modal from '../../components/Modal'

const StyledHome = styled.div`
width: 100%
height: 100vh
`

function Home() {
  return (
    <StyledHome>
      <LeftComponent />
      <RightComponent />
      <Modal />
    </StyledHome>
  )
}

export default Home
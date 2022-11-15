import React, {useContext} from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { ModalContext } from '../../context/ModalContext'
const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #241f21;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    text-align: center;
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 0.75rem;
    span{
        font-weight: 700;
    }
`
const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
`

const AddPlayground = styled.button`
    padding: 0.25rem 1.5rem;
    font-size: 1rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 2rem;
        font-weight: 700;
    }
    &:hover{
        cursor: pointer;
    }
`
const LeftComponent = () => {
    const {setModal} = useContext(ModalContext);
    return (
        <StyledLeftComponent>
            <ContentContainer>
                <Logo src={logo} alt="" />
                <MainHeading> <span>Code</span> Deck</MainHeading>
                <SubHeading>Code. Compile. Develop.</SubHeading>
                <AddPlayground onClick={() => setModal(true, 3)} ><span>+</span> Create New Playground</AddPlayground>
            </ContentContainer>
        </StyledLeftComponent>
    )
}

export default LeftComponent
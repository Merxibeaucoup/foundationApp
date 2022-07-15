import React from 'react'
import styled from "styled-components"








const Container = styled.div`
height: 80px;
width: 100vw;
margin-top:10px;
margin-bottom:-15px;


  
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

const Left = styled.div`
    flex:1;
`
const Logo = styled.h1`
    font-size: 20px;
    color: #103ea9d0;
    transition: all 0.65s ease;
  &:hover {
    color: #e9b828;
    transform: scale(1.0);
   ; 
  }
`

const Center = styled.div`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItems = styled.div`
    font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 20px;
`





const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Logo> WB foundation</Logo>
        </Left>
        <Center>
        <MenuItems> Home</MenuItems>
            <MenuItems> About Us</MenuItems>
            <MenuItems> Causes</MenuItems>
            <MenuItems> Contact</MenuItems>
            
        </Center>
        </Wrapper>
    </Container>
  )
}

export default Navbar
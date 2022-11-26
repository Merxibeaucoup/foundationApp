import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  width: 100vw;
  margin-top: 10px;
  margin-bottom: -15px;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Logo = styled.div`
  z-index: 99;
  position: absolute;
  top: -1rem;
  left: 1rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItems = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 20px;
`;

const LogoImg = styled.img`
  width: 10rem;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

const Navbar = () => {
  const [state] = useState({
    logo: "assets/logo/wb-4.png",
  });
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <LogoImg src={state.logo} alt="logo" />
          </Logo>
        </Left>
        <Center>
          <MenuItems> Home</MenuItems>
          <MenuItems> About Us</MenuItems>
          <MenuItems> Causes</MenuItems>
          <MenuItems> Contact</MenuItems>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

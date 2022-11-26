import { MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #073b4c;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const FooterCopyRight = styled.footer`
  text-decoration: none;
  outline: none;
  color: white;
  margin-top: 3rem;
  font-size: 15px;
  justify-content: center;
  &:hover {
    color: #ffd166;
  }
`;

const DesignBy = styled.p`
  font-size: 10px;
  color: grey;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WB Foundation.</Logo>
        <Desc>
          Blah blah blah blah blah blah blah blah blah blah blah, Thank you
        </Desc>
      </Left>
      <Center>
        <Title>Mail Us</Title>
        <List>
          <ListItem>
            <br />
            pawtucket RI
            <br />
            02861
            <br />
            USA
          </ListItem>
        </List>
        <FooterCopyRight>
          {" "}
          © WBFoundation All Rights Reserved. CopyRight 2022.
        </FooterCopyRight>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", color: "#ef476f" }} /> Pawtucket
          RI
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contact@wbFoundation.bleh
        </ContactItem>

        <DesignBy>Website Design by Edgar</DesignBy>
      </Right>
    </Container>
  );
};

export default Footer;

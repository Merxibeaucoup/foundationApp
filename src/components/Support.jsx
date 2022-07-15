import React from 'react'
import styled from "styled-components"

const Container= styled.div`
height: 130vh;
background-color:white;
    text-align:center;
`

const Title = styled.h1`
    color:#103ea9d0;
    padding-top:5%;
    font-size:50px;
`
const Desc = styled.p`
    font-size: 18px;
    padding-top: 5%;
    color:#353537d0;
    letter-spacing: 2px;
    line-height:30px;

`

const BoxContainer = styled.div`
    margin:8%;
  display: flex;
  height:40%;
  padding-bottom:5%;
 
  

`

const BoxTitle = styled.h1`
    color: white;
    font-size:30px;
    padding: 5%;
    text-align:left;
    letter-spacing: 2px;
    line-height:35px;
    
`

const BoxDesc = styled.p`
    font-size: 18px;
    padding: 5%;
    color:white;
    letter-spacing: 2px;
    line-height:30px;
`

const Box = styled.div`
  flex:1;
  width:30%; 
  background-image:url("/img2/dove.jpg");
        background-size:cover;
    background-color:grey;
    margin-right:5%;
    margin-left: 5%;
    border-radius:2%;
    color:white;
    padding-bottom:5%;
    position: relative;
   
   

`
const BoxTwo = styled.div`
  flex:1;
  width:30%; 
  background-image:url("/img2/hope.jpg");
        background-size:cover;
    background-color:grey;
    margin-right:5%;
    margin-left: 5%;
    border-radius:2%;
    color:white;
    padding-bottom:5%;
    position: relative;
   
   

`

const Button= styled.button`
position:absolute;
bottom:5%;
right:5%;
font-size:15px;
border-style:none;
border-radius:10px;
background-color:#e9b828;
cursor: pointer;
font-weight: bold;
color:white;
transition: all 0.65s ease;
  &:hover {
    background-color: white;
    transform: scale(1.0);
    background:url("/img2/btn-bg1.png");
    
    
   
  }
`

const Support = () => {
  return (
    <Container>
        <Title>Your Support Helps Our <br /> Community</Title>
        <Desc>By Supporting WBfoudation, you are supporting unfortanate kids in <br /> Ghana, west Africa. <br />
            What started as an annual food drive 4 years ago has <br /> blossomed into a community centered organization
            focused on providing <br /> quality life for  unfortunate kids.
        </Desc>
        <BoxContainer>

            <Box background='/img2/child.jpg'>
                
                <BoxTitle>Support <br /> a Kid</BoxTitle>
                <BoxDesc>Your generous support drives our mission and enables us to make an impact in our community.
                     You are vital to the work that we do.</BoxDesc>
                <Button>Donate</Button>
            </Box>
            <BoxTwo>
                <BoxTitle>Sponsor WBFoundation</BoxTitle>
                <BoxDesc>Becoming a WBFoundation Team  sponsor is a 
                    smart and strategic way to build brand awareness and 
                    strengthen your consumer loyalty</BoxDesc>
                <Button>Sponsor</Button>
            </BoxTwo>

        </BoxContainer>
    </Container>
  )
}

export default Support
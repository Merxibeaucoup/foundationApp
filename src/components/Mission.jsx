import React from 'react'
import { Zoom } from 'react-reveal'
import styled from "styled-components"

const Container= styled.div`
height: 60vh;
padding:6%;
display: flex;
`

const Left = styled.div`
flex: 1;
    
`
const Title = styled.h1`
color:#103ea9d0;
`

const Desc = styled.p`
padding-top:20px;
   letter-spacing:normal;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 2px;
    line-height:30px;
    font-weight:400px;
    color:#353537d0;
`

const Right = styled.div`
   flex: 1;
 
`
const ImageContainer = styled.div`

height: 100%;

    
`

const Image = styled.img`
    width: 100%;
        height: 100%;
        border-radius: 2%;
        
`

const AboutButton = styled.button`
padding: 10px;
margin:10%;
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


const Mission = () => {

    const images = "/img2/children.jpg"
  return (
    <Container>
        <Left>
        <Title>Our Mission is Hope.</Title>
       
        <Desc>
        <Zoom left cascade>
          Giving Hope To The Hopeless.
          </Zoom>
           
            <Zoom right cascade>
            Restoring Hope.
            </Zoom>
            <Zoom left cascade>
            Building A Nation.
            </Zoom>
            <Zoom right cascade>
            Together We Can!
            </Zoom>
            <Zoom left cascade>
            At the end of the day, we must go forward with hope and not backward by fear and division.
            </Zoom>
        </Desc>
        
        <AboutButton>About Us</AboutButton>
        </Left>
        <Right>
            <ImageContainer>
                <Image src={images}/>
            </ImageContainer>
        </Right>
    </Container>
  )
}

export default Mission
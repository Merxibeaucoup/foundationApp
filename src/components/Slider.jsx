import React from 'react'
import styled from "styled-components"
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { Parallax } from 'react-parallax';







const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display:flex;
    position: relative;
    overflow:hidden;

    
    
`
const Arrow = styled.div`
 
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`


const ImgContainer = styled.div`
width: 100vw;
height: calc(100vh - 100px);
    position: relative;

    

`

const Image = styled.img`
    height: 125%;
    width:100vw;
    object-fit:fill;
    
   
   
`

const LArrowContainer = styled.div`
     width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const RArrowContainer = styled.div`
     width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`



const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/w5.jpg",
        "/img/w6.jpg",
        "/img/w1.jpg",
       
    ];
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }


  return (
    <Container>
         <LArrowContainer direction="left" onClick={() => handleArrow("l")}>
         <ArrowLeftOutlined/>
        
            </LArrowContainer>

            
       
   
        <Wrapper style={{transform:`translateX(${-100*index}vw)`}}>
       

            {images.map((img,i) =>(
                <ImgContainer key={i}>
                    <Image src={img} />
                </ImgContainer>
                
            ))}
        
        </Wrapper>
        
        <RArrowContainer direction="right" onClick={() => handleArrow("r")}>
         <ArrowRightOutlined/>
        
            </RArrowContainer>
                
          




       

    </Container>
  )
}

export default Slider
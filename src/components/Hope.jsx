import { People } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import {useState} from 'react';


const Container= styled.div`
height: 80vh;
background-color:#103ea9d0;

    text-align:center;
`

const Title = styled.div`

    color:#e9b828;
    font-size:35px;
    font-weight: bolder; 
    padding-top:5%;
    margin-left:35%;
    margin-right:35%;
    align-items: center;
    justify-content: center;
`
const Desc = styled.p`
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top:2%;
`

const LetterContainer = styled.div`
    display: flex;
    margin-top:5%;
    
`

const Letter = styled.h1`
flex:1;
font-size:90px;
transition: all 0.65s ease;
  &:hover {
    background-color:red;
    height:100%;
    transform: scale(1.0);
   ; 
  }
    
`

const LetterDesc = styled.p`
color:white;
font-size:30px;
font-weight: light;
    
`

const Icon = styled.div`
    color:white;
   
`

const MessageContainer = styled.div`
height:12%;
width:60%;
background-color:white;
margin-top: 3%;
margin-left:20%;
border-radius:5px;
border-bottom-style:solid;
border-bottom-color:red;

 
`

const Message= styled.p`
text-align:center;
align-items: center;
justify-content: center;
padding-top: 2%;
font-size: 18px;
`

const Hope = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const messages = [
        "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
        "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
        "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        "All kids need is a little help, a little hope and somebody who believes in them.",
        "Hope is being able to see that there is light despite all of the darkness.",
        "To live without hope is to cease to live.",
        "Few things in the world are more powerful than a positive push. A smile. A world of optimism and hope. A ‘you can do it’ when things are tough.",
        "A strong mind always hopes, and has always cause to hope.",
        "Hope never abandons you, you abandon it.",
        "When you stop hoping you start settling.",
        "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
        "There are far, far better things ahead than anything we leave behind.",
        "Hope sees the invisible, feels the intangible, and achieves the impossible.",
        "Once you choose hope, anything is possible.",
        "To plant a garden is to believe in tomorrow.",
        "For every dark night there is a brighter day.",
        "Hope is the word which God has written on the brow of every man.",
        "The moment you doubt whether you can fly, you cease forever to be able to do it.",
    ]

    const displayRandom = messages[Math.floor(Math.random()*messages.length)];


  return (
    <Container>
        <Title>
            Fear never builds the future,
            <br />
            but <span style={{color:'#ec1010'}}>HOPE</span>  does.
        </Title>
        <Desc>
            HOPE is an acronym we have chosen to help you understand our mission.
        </Desc>

        <LetterContainer>
            <Letter onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                H
               <LetterDesc>Helping</LetterDesc>
                  
            </Letter>
            
            <Letter onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                O
                <LetterDesc>Other</LetterDesc>
            </Letter>
            <Letter onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                P
                <LetterDesc>People</LetterDesc>
            </Letter>
            <Letter onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                E
                <LetterDesc>Excel</LetterDesc>
            </Letter>
           

        </LetterContainer>

        {isHovering&& (
            <MessageContainer>
                <Message>{displayRandom}</Message>
            </MessageContainer>
            )}

       
       


    </Container>
  )
}

export default Hope
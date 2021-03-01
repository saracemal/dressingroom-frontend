import React from "react"
import styled from "styled-components";
// import HeaderButtons from "./HeaderButtons"

function Header() {
    return (
        <HeaderDiv>
            <Title>Dressing Room 🌸</Title>
        </HeaderDiv>
    )
}

export default Header;

const HeaderDiv = styled.div`
height: 10vh;
text-align: center;
display: grid;
grid-area: 1 / 1 / 2 / 6; 
  opacity: 0.75;
  background-color: #8abbff;
  transition: all 0.5s ease-in-out 0s;
  box-shadow: 2px 5px black;
  :hover {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 1px 3px black;
  }
`

const Title = styled.h1`
    text-align: center;
    font-family: 'Lemon', serif;
    padding: 20px;

`
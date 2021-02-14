import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function MainHeader() {
   return (
       <MainHeaderDiv>
          <Title>Dressing Room 🌸 </Title>
            <ButtonWrapper>
                <Link to="/home">
                    <button className="home-button">🏡</button>
                </Link>
                <Link to="/inspo">
                    <button className="inspo-button">💡</button>
                </Link>
                <Link to="/">
                    <button className="logout-button">LOGOUT</button>
                </Link>
            </ButtonWrapper>  
        </MainHeaderDiv>
   )
}

export default MainHeader;

const MainHeaderDiv = styled.div`
height: 10vh;
  display: flex;
  object-fit: contain;
  text-align: center;
  justify-content: space-between;
  opacity: 0.75;
  background-color: #8abbff;
  transition: all 0.5s ease-in-out 0s;
  :hover {
    opacity: 1;
    transform: scale(1.00);
    box-shadow: 1px 3px black;
  }
`

const Title = styled.h1`
    padding: 20px;
    text-align: center;
    font-family: 'Lemon', serif;
`

const ButtonWrapper = styled.div`
    padding: 20px;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;
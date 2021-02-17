import React from "react"
import styled from "styled-components";

function Details() {
    return (
        <Wrapper>
            <h2>In an attempt to minimize over-consumption of clothing and accessories, Dressing Room was born!
            Fashion is the second most polluting industry in the world. It's hard to keep up with new styles and trends.
            We are here to encourage you to slow down, shop secondhand whenever possible, and help you rethink your purchases. 🐞
            </h2>
        </Wrapper>
    )
}

export default Details;

const Wrapper = styled.div`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    display: grid;
    grid-area: 2 / 1 / 4 / 3;
    color: black;
    background-color: #9AF28D;
    height: 400px;
    margin-left: 70px;
    margin-bottom: 20px;
    width: 900px;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0.75;
    padding: 30px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        opacity: 1;
        transform: scale(1.00);
        box-shadow: 2px 5px black;
  }
`

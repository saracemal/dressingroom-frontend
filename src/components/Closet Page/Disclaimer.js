import React from "react"
import styled from "styled-components"


function Disclaimer() {

    return (
        <DisclaimerWrapper>
            <Title>Before you buy! </Title>
            <div className="disclaimer">
                <ul className="disclaimer-items">
                    <li>- is this an impulse buy? think of your dream wardrobe, does this item fit the picture?</li>
                    <li>- it’s always great to have a priority list to look at when it comes to buying clothes. </li>
                    <li>- look out for wardrobe staples, not trends.</li>
                    <li>- do you already own something that serves the same purpose? if yes, and you still want the item, maybe think about donating, gifting, selling the other one.</li>
                    <li>- shopping is a luxury, and you should treat it that way. always choose one item that you will cherish forever, over 10 things that won’t make it to next spring. </li>
                    <li>- will you take good care of it? don’t invest in something that you will treat carelessly! think of it as an investment. and if it does break, will you repair it?</li>
                    <H3> -- Brenda from Disruptive Berlin</H3>
                </ul>
            </div>
        </DisclaimerWrapper>
    )
}

export default Disclaimer;

const Title = styled.h1`
    padding: 20px;
    text-align: center;
    font-family: 'Lemon', serif;
`
const H3 = styled.h3`
    padding: 20px;
    text-align: center;
    font-family: 'Lemon', serif;
`

const DisclaimerWrapper = styled.div`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    display: flex;
    color: black;
    background-color: #9AF28D;
    height: 450px;
    width: 700px;
    justify-content: space-around;
    align-items: center;
    opacity: 0.75;
    padding: 20px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        opacity: 1;
        transform: scale(1.00);
        box-shadow: 2px 5px black;
  }
`
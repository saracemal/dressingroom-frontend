import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"
import DropDownButtons from "./DropDownButtons"
import styled from "styled-components";

function HomePage({closets, onDeleteCloset, onAddCloset, currentUser}) {
    return (
        <Wrapper>
            <MainHeader />
            <Title>✨ My Closets ✨</Title>
            <ClosetContainer currentUser={currentUser} closets={closets} onDeleteCloset={onDeleteCloset}/>
            <Bottom>
                <DropDownButtons />
                <ClosetForm currentUser={currentUser} onAddCloset={onAddCloset} />
            </Bottom>
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: lavender;
`
const Title = styled.h1`
    text-align: center;
    font-family: 'Lemon', serif;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`


// .parent {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(3, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }
    
//     .div1 { grid-area: 1 / 1 / 2 / 6; }
//     .div2 { grid-area: 2 / 1 / 4 / 2; }
//     .div3 { grid-area: 2 / 2 / 4 / 4; }
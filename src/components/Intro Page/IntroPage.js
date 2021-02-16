import React from "react"
import Header from "./Header"
import SignUp from "./SignUp"
import Details from "./Details"
import FactCarousel from "./FactCarousel"
import styled from "styled-components";


function IntroPage({handleLoginSubmit, loginUsername, setLoginUsername, newUserName, setNewUserName, handleCreateAccountSubmit}) {
    return (
        <Wrapper>
            <Header />
            <Details />
            <SignUp newUserName={newUserName} setNewUserName={setNewUserName} handleCreateAccountSubmit={handleCreateAccountSubmit} loginUsername={loginUsername} setLoginUsername={setLoginUsername} handleLoginSubmit={handleLoginSubmit}/>
            <FactCarousel />
        </Wrapper>
    )
}

export default IntroPage;

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-color: lavender;
    text-align: center;
`

// .parent {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-template-rows: repeat(4, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }
    
//     .div1 { grid-area: 1 / 1 / 2 / 6; }
//     .div2 { grid-area: 2 / 1 / 4 / 3; }
//     .div3 { grid-area: 2 / 3 / 4 / 5; }
//     .div4 { grid-area: 4 / 1 / 5 / 5; }
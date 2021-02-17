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

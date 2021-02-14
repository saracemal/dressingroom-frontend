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
            <DropDownButtons />
            <ClosetForm currentUser={currentUser} onAddCloset={onAddCloset} />
            <ClosetContainer currentUser={currentUser} closets={closets} onDeleteCloset={onDeleteCloset}/>
            </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    background-color: lavender;
`
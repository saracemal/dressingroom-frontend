import React from "react"
import InspoContainer from "./InspoContainer"
import NewInspoForm from "./NewInspoForm"
import MainHeader from "../MainHeader"
import styled from "styled-components";

function InspoPage({currentUser, inspos, setInspos, onDeleteInspo}) {
    function handleAddInspo(newInspo) {
        const updatedInsposArray = [...inspos, newInspo];
        setInspos(updatedInsposArray)
      }

    return (
        <Wrapper>
            <MainHeader />
            <Title>✨ Inspiration ✨</Title>
            <InspoContainer currentUser={currentUser} inspos={inspos} onDeleteInspo={onDeleteInspo} />
            <NewInspoForm onAddInspo={handleAddInspo} currentUser={currentUser} />
        </Wrapper>
    )
}

export default InspoPage;

const Wrapper = styled.div`
    background-color: lavender;
`
const Title = styled.h1`
  font-family: 'Lemon', serif;
  text-align: center;
`
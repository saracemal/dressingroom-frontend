import React from "react"
import InspoCard from "./InspoCard"
import styled from "styled-components"

function InspoContainer({inspos, onDeleteInspo}) {


    const inspoCards = inspos.map((inspo) => (
        <InspoCard key={inspo.id} inspo={inspo} onDeleteInspo={onDeleteInspo} />
    ))

    return (
    <InspoWrapper>
        {/* <Title>✨ Inspiration ✨</Title> */}
        {inspoCards}
    </InspoWrapper>
    )
}

export default InspoContainer;

const InspoWrapper = styled.div`
    // width: 80%;
  display: flex;
  flex-wrap: wrap;  
  flex-direction: row;
text-align: center;
`

// const Title = styled.h1`
// font-family: 'Lemon', serif;
// `
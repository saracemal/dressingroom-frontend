import React from "react"
import InspoCard from "./InspoCard"
import styled from "styled-components"

function InspoContainer({inspos, onDeleteInspo}) {


    const inspoCards = inspos.map((inspo) => (
        <InspoCard key={inspo.id} inspo={inspo} onDeleteInspo={onDeleteInspo} />
    ))

    return (
    <InspoWrapper>
        {inspoCards}
    </InspoWrapper>
    )
}

export default InspoContainer;

const InspoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;  
  flex-direction: row;
text-align: center;
`

import React from "react"
import ClosetCard from "./ClosetCard"
import styled from "styled-components"

function ClosetContainer({closets, onDeleteCloset}) {
   return (
       <Container>
           <Title>✨ My Closets ✨</Title>
           {closets.map((closet) => (
            <ClosetCard key={closet.id} closet={closet} onDeleteCloset={onDeleteCloset}/>))}
       </Container>
   )
}

export default ClosetContainer;

const Title = styled.h1`
    font-family: 'Lemon', serif;
`

const Container = styled.div`
    display: grid;
    grid-area: 2 / 2 / 4 / 4;
`
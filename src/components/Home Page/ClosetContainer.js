import React from "react"
import ClosetCard from "./ClosetCard"
import styled from "styled-components"

function ClosetContainer({closets, onDeleteCloset}) {
   return (
       <Container>
           {closets.map((closet) => (
            <ClosetCard key={closet.id} closet={closet} onDeleteCloset={onDeleteCloset}/>))}
       </Container>
   )
}

export default ClosetContainer;

// const Title = styled.h1`
//     font-family: 'Lemon', serif;
// `

const Container = styled.div`
    display: flex;
  flex-wrap: wrap;  
  flex-direction: row;
    text-align: center;
`
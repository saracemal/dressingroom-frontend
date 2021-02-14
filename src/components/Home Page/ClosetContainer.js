import React from "react"
import ClosetCard from "./ClosetCard"
import styled from "styled-components"

function ClosetContainer({closets, onDeleteCloset}) {
   return (
       <div className="closet-container">
           <Title>✨ My Closets ✨</Title>
           {closets.map((closet) => (
            <ClosetCard key={closet.id} closet={closet} onDeleteCloset={onDeleteCloset}/>))}
       </div>
   )
}

export default ClosetContainer;

const Title = styled.h1`
    font-family: 'Lemon', serif;
`
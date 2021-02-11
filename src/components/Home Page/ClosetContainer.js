import React from "react"
import ClosetCard from "./ClosetCard"

function ClosetContainer({closets, onDeleteCloset}) {
   return (
       <div className="closet-container">
           <h1>I hold all the closets</h1>
           {closets.map((closet) => (
            <ClosetCard key={closet.id} closet={closet} onDeleteCloset={onDeleteCloset}/>))}
       </div>
   )
}

export default ClosetContainer;
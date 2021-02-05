import React from "react"
import ClosetCard from "./ClosetCard"

function ClosetContainer({closets, handleClosetDelete}) {
   return (
       <div className="closet-container">
           <h1>I hold all the closets</h1>
           {closets.map((closet) => (
            <ClosetCard key={closet.id} closet={closet} handleClosetDelete={handleClosetDelete}/>))}
       </div>
   )
}

export default ClosetContainer;
import React from "react"

//buttons appear upon hover?
function ClosetCard({closet, handleClosetDelete}) {
    const {id, name} = closet;
   return (
       <div className="closet-card">
           <h3>I am a closet </h3>
           {name}
           <div class="ui large buttons">
                <button class="ui button view">view</button>
                <div class="or"></div>
                <button onClick={handleClosetDelete} class="ui button delete">delete</button>
        </div>
       </div>
   )
}

export default ClosetCard;
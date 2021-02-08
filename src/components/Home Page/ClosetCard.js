import React, {useHistory} from "react"

//buttons appear upon hover?
function ClosetCard({closet, handleClosetDelete}) {
let history = useHistory();

function handleViewCloset(closet) {
    history.push(`/closet/${closet.id}`);
}
    const {id, name} = closet;
   return (
       <div className="closet-card">
           <h3>I am a closet </h3>
           {name}
           <div class="ui large buttons">
                <button onClick={handleViewCloset} class="ui button view">view</button>
                <div class="or"></div>
                <button onClick={handleClosetDelete} class="ui button delete">delete</button>
        </div>
       </div>
   )
}

export default ClosetCard;
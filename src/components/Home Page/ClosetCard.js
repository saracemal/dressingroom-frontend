import React from "react"
import { useHistory } from "react-router-dom";

//buttons appear upon hover?
function ClosetCard({closet, onDeleteCloset}) {
const {id, name} = closet;
let history = useHistory();

function handleViewCloset(id) {
    history.push(`/closet/${closet.id}`);
}

// function handleDelete2() {
//     handleClosetDelete(id)
// }

function handleClosetDelete() {
      fetch(`http://localhost:3000/closets/${id}`, {
        method: "DELETE",
      })
      onDeleteCloset(id)
    }

   return (
       <div className="closet-card">
           <h3>I am a closet </h3>
           {name}
           <div className="ui large buttons">
                <button onClick={handleViewCloset} className="ui-button-view">view</button>
                <div className="or"></div>
                <button onClick={handleClosetDelete} className="ui-button-delete">delete</button>
        </div>
       </div>
   )
}

export default ClosetCard;
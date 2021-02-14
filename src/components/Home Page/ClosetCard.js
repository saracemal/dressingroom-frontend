import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//buttons appear upon hover?
function ClosetCard({closet, onDeleteCloset}) {
const {id, name} = closet;
let history = useHistory();

function handleViewCloset() {
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
       <Card>
           <h3>🌻🌷🌻🌷🌻🌷🌻🌷🌻🌷</h3>
           <Name>{name}</Name>
           <div className="ui large buttons">
                <button onClick={handleViewCloset} className="ui-button-view">view</button>
                <button onClick={handleClosetDelete} className="ui-button-delete">delete</button>
        </div>
       </Card>
   )
}

export default ClosetCard;

const Name = styled.p`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    object-fit: contain;
`

const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  margin: 10px;
  padding: 5px;
  border: 1px solid green;
  border-radius: 30px;
  overflow: scroll;
  transition: all 0.5s ease-in-out 0s;
  :hover {
    transform: scale(1.05);
    box-shadow: 2px 5px green;
  }
`;
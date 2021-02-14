import React, {useState} from "react";
import styled from "styled-components";

function ClosetForm({currentUser, onAddCloset}) {
const [newCloset, setNewCloset] = useState("")


function handleNewClosetSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/closets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        name: newCloset
      })
    
    })
      .then((r) => r.json())
         .then((newClosetName) => onAddCloset(newClosetName))
  //     .then(data => console.log(data))
  //     // .then(resObj => {
  //     //   setNewClosetName(resObj.name)
  //     //   history.push(`/closet/${resObj.id}`)
  //     // })
  }

   return (
       <NewClosetWrapper>
           <NewCloset>add new closet </NewCloset>
           <form onSubmit={handleNewClosetSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="title"
                    value={newCloset}
                    onChange={(e) => setNewCloset(e.target.value)}/>
            <button className="new-closet-btn"type="submit">add closet 👠</button>
           </form>
        </NewClosetWrapper>
   )
}

export default ClosetForm;

const NewClosetWrapper = styled.div`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    display: flex;
    color: black;
    flex-direction: column;
    background-color: #9AF28D;
    height: 350px;
    width: 500px;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0.75;
    padding: 20px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        transform: scale(1.00);
        opacity: 1;
        box-shadow: 2px 5px black;
  }
`

const NewCloset = styled.h1`
    text-align: center;
`
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
           <NewCloset>✨ add new closet ✨</NewCloset>
           <form onSubmit={handleNewClosetSubmit}>
                <InputForm 
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

const InputForm = styled.input`
  text-align: center;
  width: 150px;
  height: 30px;
  border: 0;
  color: black;
  border-radius: 5px;
  background: opacity: 0.5;
  font-family: 'Anonymous Pro', monospace;
  border-bottom: 2px dotted black;
  :focus { outline: none; }
`

const NewClosetWrapper = styled.div`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    display: flex;
    color: black;
    flex-direction: row;
    background-color: #9AF28D;
    height: 350px;
    width: 500px;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0.75;
    padding: 20px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out 0s;
    box-shadow: 2px 5px black;
    :hover {
        transform: scale(1.05);
        opacity: 1;
        box-shadow: 2px 5px black;
  }
`

const NewCloset = styled.h1`
    text-align: center;
`
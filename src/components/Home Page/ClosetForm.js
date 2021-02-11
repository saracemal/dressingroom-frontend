import React, {useState} from "react"

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
       <div className="new-closet-form">
           <h1>add new closet </h1>
           <form onSubmit={handleNewClosetSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="title"
                    value={newCloset}
                    onChange={(e) => setNewCloset(e.target.value)}/>
            <button className="new-closet-btn"type="submit">add closet 👠</button>
           </form>
       </div>
   )
}

export default ClosetForm;
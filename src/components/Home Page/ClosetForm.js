import React from "react"

function ClosetForm({newCloset, setNewCloset, handleNewClosetSubmit}) {
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
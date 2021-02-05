import React from "react"

function ClosetForm({newCloset, setNewCloset, handleNewStorySubmit}) {
   return (
       <div className="new-closet-form">
           <h1>add new closet </h1>
           <form onSubmit={handleNewStorySubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="title"
                    value={newCloset}
                    onChange={(e) => setNewCloset(e.target.value)}/>
            <input type="submit" value="add" />
           </form>
       </div>
   )
}

export default ClosetForm;
import React from "react"

//buttons appear upon hover! 
function InspoCard({inspo, onDeleteInspo}) {
    const {id, img_url, caption} = inspo;


    function handleInspoDelete() {
          fetch(`http://localhost:3000/inspos/${id}`, {
            method: "DELETE",
          })
            onDeleteInspo(id)
      }

   return (
       <div className="inspo-card">
           <h3>I am an inspo card!</h3>
           <img src={img_url} alt={caption}/>
           <p>{caption}</p>
           <button onClick={handleInspoDelete} id={inspo.id} className="ui-button-delete">🗑</button>
       </div>
   )
}

export default InspoCard;
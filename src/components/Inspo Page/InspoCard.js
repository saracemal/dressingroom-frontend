import React from "react"

//buttons appear upon hover! 
function InspoCard({inspo, handleInspoDelete}) {
    const {id, img_url, caption} = inspo;

    function handleDelete() {
        handleInspoDelete(id)
    }

   return (
       <div className="inspo-card">
           <h3>I am an inspo card!</h3>
           <img src={img_url} alt={caption}/>
           <p>{caption}</p>
           <button onClick={handleDelete} id={inspo.id} className="ui button delete" >🗑</button>
       </div>
   )
}

export default InspoCard;
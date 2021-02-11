import React from "react"
import InspoCard from "./InspoCard"

function InspoContainer({inspos, onDeleteInspo}) {


    const inspoCards = inspos.map((inspo) => (
        <InspoCard key={inspo.id} inspo={inspo} onDeleteInspo={onDeleteInspo} />
    ))
    
    return (
    <div className="inspo-container-2">
        <h1>All the inspoooo</h1>
        {inspoCards}
    </div>
    )
}

export default InspoContainer;
import React from "react"
import InspoContainer from "./InspoContainer"
import NewInspoForm from "./NewInspoForm"
import MainHeader from "../MainHeader"

function InspoPage({currentUser, inspos, setInspos, handleInspoDelete}) {
    function handleAddInspo(newInspo) {
        const updatedInsposArray = [...inspos, newInspo];
        setInspos(updatedInsposArray)
      }

    return (
        <div className="inspo-container">
            <MainHeader />
            <InspoContainer currentUser={currentUser} inspos={inspos} handleInspoDelete={handleInspoDelete} />
            <NewInspoForm onAddInspo={handleAddInspo} currentUser={currentUser} />
        </div>
    )
}

export default InspoPage;
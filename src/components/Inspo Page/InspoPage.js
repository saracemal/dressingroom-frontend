import React from "react"
import InspoContainer from "./InspoContainer"
import NewInspoForm from "./NewInspoForm"
import MainHeader from "../MainHeader"

function InspoPage({inspos, newInspoImg, newInspoCaption, setNewInspoImg, setNewInspoCaption, handleInspoDelete, handleNewInspoSubmit}) {
    return (
        <div>
            <MainHeader />
            <InspoContainer inspos={inspos} handleInspoDelete={handleInspoDelete} />
            <NewInspoForm newInspoImg={newInspoImg} newInspoCaption={newInspoCaption} setNewInspoImg={setNewInspoImg} setNewInspoCaption={setNewInspoCaption} handleNewInspoSubmit={handleNewInspoSubmit}/>
        </div>
    )
}

export default InspoPage;
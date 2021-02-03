import React from "react"
import InspoCard from "./InspoCard"
import InspoContainer from "./InspoContainer"
import NewInspoForm from "./NewInspoForm"
import MainHeader from "../MainHeader"

function InspoPage() {
    return (
        <div>
            <MainHeader />
            <InspoCard />
            <InspoContainer />
            <NewInspoForm />
        </div>
    )
}

export default InspoPage;
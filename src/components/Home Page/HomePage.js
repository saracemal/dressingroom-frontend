import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetCard from "./ClosetCard"
import ClosetForm from "./ClosetForm"

function HomePage() {
    return (
        <div>
            <MainHeader />
            <ClosetContainer />
            <ClosetCard />
            <ClosetForm />
        </div>
    )
}

export default HomePage;
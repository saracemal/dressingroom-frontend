import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"

function HomePage({closets, newCloset, setNewCloset, handleClosetDelete, handleNewStorySubmit}) {
    return (
        <div>
            <MainHeader />
            <ClosetContainer closets={closets} handleClosetDelete={handleClosetDelete}/>
            <ClosetForm newCloset={newCloset} setNewCloset={setNewCloset} handleNewStorySubmit={handleNewStorySubmit}/>
        </div>
    )
}

export default HomePage;
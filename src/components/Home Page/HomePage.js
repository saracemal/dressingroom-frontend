import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"

function HomePage({closets, newCloset, setNewCloset, handleClosetDelete, handleNewClosetSubmit}) {
    return (
        <div>
            <MainHeader />
            <ClosetContainer closets={closets} handleClosetDelete={handleClosetDelete}/>
            <ClosetForm newCloset={newCloset} setNewCloset={setNewCloset} handleNewClosetSubmit={handleNewClosetSubmit}/>
        </div>
    )
}

export default HomePage;
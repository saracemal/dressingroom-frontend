import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"

function HomePage({closets, newCloset, setNewCloset, handleClosetDelete, handleNewClosetSubmit, currentUser}) {
    return (
        <div>
            <MainHeader />
            <ClosetContainer currentUser={currentUser} closets={closets} handleClosetDelete={handleClosetDelete}/>
            <ClosetForm currentUser={currentUser} newCloset={newCloset} setNewCloset={setNewCloset} handleNewClosetSubmit={handleNewClosetSubmit}/>
        </div>
    )
}

export default HomePage;
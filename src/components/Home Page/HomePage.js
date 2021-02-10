import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"
import DropDownButtons from "./DropDownButtons"

function HomePage({closets, newCloset, setNewCloset, handleClosetDelete, handleNewClosetSubmit, currentUser}) {
    return (
        <div>
            <MainHeader />
            <DropDownButtons />
            <ClosetContainer currentUser={currentUser} closets={closets} handleClosetDelete={handleClosetDelete}/>
            <ClosetForm currentUser={currentUser} newCloset={newCloset} setNewCloset={setNewCloset} handleNewClosetSubmit={handleNewClosetSubmit}/>
        </div>
    )
}

export default HomePage;
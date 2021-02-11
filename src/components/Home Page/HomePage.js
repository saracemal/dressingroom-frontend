import React from "react"
import MainHeader from "../MainHeader"
import ClosetContainer from "./ClosetContainer"
import ClosetForm from "./ClosetForm"
import DropDownButtons from "./DropDownButtons"

function HomePage({closets, onDeleteCloset, onAddCloset, currentUser}) {
    return (
        <div className="home-container">
            <MainHeader />
            <DropDownButtons />
            <ClosetContainer currentUser={currentUser} closets={closets} onDeleteCloset={onDeleteCloset}/>
            <ClosetForm currentUser={currentUser} onAddCloset={onAddCloset} />
        </div>
    )
}

export default HomePage;
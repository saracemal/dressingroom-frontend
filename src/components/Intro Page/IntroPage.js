import React from "react"
import Header from "./Header"
import SignUp from "./SignUp"
import Details from "./Details"
import FactCarousel from "./FactCarousel"


function IntroPage({handleLoginSubmit, loginUsername, setLoginUsername, newUserName, setNewUserName, handleCreateAccountSubmit}) {
    return (
        <div className="intro-container">
            <Header handleLoginSubmit={handleLoginSubmit} loginUsername={loginUsername} setLoginUsername={setLoginUsername} />
            <SignUp newUserName={newUserName} setNewUserName={setNewUserName} handleCreateAccountSubmit={handleCreateAccountSubmit} loginUsername={loginUsername} setLoginUsername={setLoginUsername} handleLoginSubmit={handleLoginSubmit}/>
            <Details />
            <FactCarousel />
        </div>
    )
}

export default IntroPage;
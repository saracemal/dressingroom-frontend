import React from "react"
import Header from "./Header"
import SignUp from "./SignUp"
import Details from "./Details"
import FactCarousel from "./FactCarousel"


function IntroPage({handleLoginSubmit, loginUsername, setLoginUsername}) {
    return (
        <div className="intro-container">
            <Header handleLoginSubmit={handleLoginSubmit} loginUsername={loginUsername} setLoginUsername={setLoginUsername} />
            <SignUp />
            <Details />
            <FactCarousel />
        </div>
    )
}

export default IntroPage;
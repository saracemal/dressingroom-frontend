import React from "react"
import Header from "./Header"
import SignUp from "./SignUp"
import Details from "./Details"
import FactCarousel from "./FactCarousel"


function IntroPage() {
    return (
        <div>
            <Header />
            <SignUp />
            <Details />
            <FactCarousel />
        </div>
    )
}

export default IntroPage;
import React from "react"
import HeaderButtons from "./HeaderButtons"

function Header({loginUsername, setLoginUsername}) {
    return (
        <div className="header">
            <h1 className="header-title">Dressing Room</h1>
            <HeaderButtons loginUsername={loginUsername} setLoginUsername={setLoginUsername}/>
        </div>
    )
}

export default Header;
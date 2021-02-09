import React, {useState} from "react"
// add bootstrap modal here

function HeaderButtons({loginUsername, setLoginUsername}) {
    const [showSignIn, setShowSignIn] = useState(false);
    const handleShowSignIn = () => setShowSignIn(true);

    return (
        <div className="header-buttons">
            <button onClick={handleShowSignIn} className="sign-in-button">sign-in</button>
        </div>
    )
}

export default HeaderButtons;
import React, {useState} from "react"
import { Button, Modal } from "react-bootstrap"
// add bootstrap modal here

function HeaderButtons({loginUsername, setLoginUsername, handleLoginSubmit}) {
    const [showSignIn, setShowSignIn] = useState(false);

    const handleShowSignIn = () => setShowSignIn(true);
    const handleCloseSignIn = () => setShowSignIn(false);


    return (
        <div className="header-buttons">
            <>
            <Button 
            onClick={handleShowSignIn} 
            className="sign-in-button" 
            variant="outline-warning">
                sign-in
            </Button>

            <Modal show={showSignIn} onHide={handleCloseSignIn}>
                <Modal.Header closeButton>
                    <Modal.Title>welcome back! ♻️</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3> log in </h3>
                    <form>
                    <label htmlFor="name">username: </label>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                    />
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-warning" onClick={handleCloseSignIn}>
                    close
                    </Button>
                    <Button  variant="outline-info" onClick={handleLoginSubmit}>
                    enter
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}

export default HeaderButtons;
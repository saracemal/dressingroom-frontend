// import { Dropdown } from "bootstrap"
import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function DropDownButtons() {
    return (
        <div className="home-page-details">
            <div className="home-p">
                <p>To better organize and plan out future purchases, create mini "closets" of like items.</p>
                <p>Feeling stuck on where to look? Check out our recommendations below. 🔮</p>
            </div>
            <div className="home-dropdown">
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Link to Grailed</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Link to Heroine</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Link to Goodwill online</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Link to Vestiaire</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Link to TheRealReal</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
       )
}


export default DropDownButtons;
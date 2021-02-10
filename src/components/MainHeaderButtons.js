import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-bootstrap/Dropdown'

//find minimal home icon to add here 
function MainHeaderButtons() {
   return (
    <div className="main-header-buttons">
        <button className="home-button">🏡</button>
        <button className="inspo-button">💡</button>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Link to Grailed</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Link to Heroine</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Link to Goodwill online</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Link to Vestiaire</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Link to TheRealReal</Dropdown.Item>
        </DropdownButton>
    </div>
   )
}

export default MainHeaderButtons;
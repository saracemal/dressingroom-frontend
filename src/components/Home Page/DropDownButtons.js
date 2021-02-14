// import { Dropdown } from "bootstrap"
import React from "react"
import styled from "styled-components";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

function DropDownButtons() {
    return (
        <DetailWrapper>
            <div className="home-p">
                <p>To better organize and plan out future purchases, create mini "closets" of like items.</p>
                <p>Feeling stuck on where to look? Check out our recommendations. 🔮</p>
            </div>
            <div>
            <DropDownBtn>🔗🔗🔗🔗🔗🔗</DropDownBtn>
                    {/* <div class="dropdown-content">
                        <a href="https://www.grailed.com">Grailed</a>
                        <a href="https://www.heroine.com">Heroine</a>
                        <a href="https://www.amazinggoodwill.com/shop-online">Goodwill (online!)</a>
                        <a href="https://us.vestiairecollective.com/">Vestiaire</a>
                        <a href="https://www.therealreal.com">TheRealReal</a>
                    </div> */}
             </div>
        </DetailWrapper>
       )
}
export default DropDownButtons;

const DetailWrapper = styled.div`
    font-family: 'Anonymous Pro', monospace;
    text-align: center;
    display: flex;
    color: black;
    background-color: #9AF28D;
    height: 350px;
    width: 500px;
    justify-content: space-around;
    align-items: center;
    opacity: 0.75;
    padding: 20px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        opacity: 1;
        transform: scale(1.00);
        box-shadow: 2px 5px black;
  }
`

const DropDownBtn = styled.button`
    background-color: pink;
    border: none;
    padding: 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        opacity: 1;
        transform: scale(1.00);
        box-shadow: 2px 5px black;
  }

`

/* The container <div> - needed to position the dropdown content */
// .dropdown {
//   position: relative;
//   display: inline-block;
// }

/* Dropdown Content (Hidden by Default) */
// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
// }

/* Links inside the dropdown */
// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

/* Change color of dropdown links on hover */
// .dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
// .dropdown:hover .dropdown-content {
//   display: block;


/* Change the background color of the dropdown button when the dropdown content is shown */
// .dropdown:hover .dropbtn {
//   background-color: #3e8e41;
// }
// </style>

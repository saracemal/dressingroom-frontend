import React from "react"
import { Link } from "react-router-dom"

function MainHeader() {
   return (
       <div className="main-header">
          <h3 className="main-header-title">Dressing Room  </h3>
          <div className="main-header-buttons">
            <Link to="/home">
                <button className="home-button">🏡</button>
            </Link>
            <Link to="/inspo">
                <button className="inspo-button">💡</button>
            </Link>
        </div>  
       </div>
   )
}

export default MainHeader;
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="public-nav">
      <div className="navbar-content-container">
        <div className="content-inner-container">
          <div className="nav-container">
            <div className="main-nav">
              <Link to="/" className="company">
                <div className="logo-container">
                  <div className="company-logo">
                    <img src="https://canny.io/images/e30295342bafdf46ab0e6c85040bc24b.png" alt="canny-logo" /> 
                  </div>
                  <div className="company-name">
                  Canny
                  </div>
                </div>
              </Link> 
            </div>
            <div className="secondary-nav">
              <div className="dropdown-container">
                <div className="option-content">
                  <span className="feature-requests-title">FEATURE REQUESTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
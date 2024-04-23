import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {  HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>

      <nav className="navbar">
        <div className="nav-container">

          <NavLink exact to="/" className="logo">
            <span className="imdb">Film<span className="pro">Flix</span></span>
     </NavLink>       
   <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
              <NavLink
                exact
                to="/MovieSearch"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               SEARCH
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Filterr"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
FILTER              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Upcoming"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
          UPCOMING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Trending"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
        TRENDING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Blockbuster"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
        BLOCKBUSTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Topvote"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
        TOP-VOTED
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/signin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
              </NavLink>
            </li>
            
          </ul>
      
          <div className="nav-icon" onClick={handleClick}>
            
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
              <HamburgetMenuOpen />{" "}
            </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}


export default NavBar;
/*<div class="paste-button">
<button  type="button" class="button">LANGUAGES &nbsp; ▼</button>
<div class="dropdown-content">
<li className="nav-item">
            <NavLink
              exact
              to="/Tamil"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Tamil
            </NavLink>
          </li>
            <li className="nav-item">
            <NavLink
              exact
              to="/ENGLISH"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              English
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Telugu"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Telugu
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink
              exact
              to="/Hindii"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Hindi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/Malay"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Malayalam
            </NavLink>
          </li>
</div>
</div>*/
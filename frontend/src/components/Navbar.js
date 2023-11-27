import React from "react";
import { Link, NavLink } from "react-router-dom";
// import UserContext from "../auth/UserContext";
// import "./Navigation.css";

const Navbar = () => {
        return (

            <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/Homepage">
               Homepage
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/meet">
                Meet
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/explore">    
                Explore
              </NavLink>
            </li>
            <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/matches">
                Matches
              </NavLink>
            </li>
              <li className="nav-item mr-4">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
          
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                Log out {currentUser.first_name || currentUser.username}
              </Link>
            </li> */}
          </ul>
      );
    }
    export default Navbar;
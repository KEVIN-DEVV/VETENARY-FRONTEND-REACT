import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import pic1 from "./image/cat logo.jpg"

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={pic1} alt="logo"></img>
        <h1 className="logo">M-VET</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/pet">Add pet</Link>
        </li>
  
        {/* <li>
          <a href="#contacts">Contacts Us</a>
        </li> */}
        <li>
        <Link to="/signup-login">
          <button className="signup-btns">Sign up
          </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

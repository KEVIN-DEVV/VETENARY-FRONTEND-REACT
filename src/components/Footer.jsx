import React from "react";
import "./index.css";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: +254724123456</li>
          <li>Email: groupone@gmail.com</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Location</h3>
        <p>Magadi Road Dolphin Plaza, Ground Floor G10, Nairobi, Kenya</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="social-media">
          
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/i/flow/login">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">YouTube</a>
            </li>
          </ul>
  
      </div>
    </div>
  );
}

export default Footer;

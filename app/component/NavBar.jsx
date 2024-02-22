import React from "react";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <h1>Webleb</h1>
            </div>
            <div className="menu-items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

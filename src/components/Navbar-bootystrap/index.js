import React from "react";
import Logo from "../../pictures/muckleshootlogo.png";
import { BrowserRouter as Route, Link } from "react-router-dom";


function Navbar_Bootstrap() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark red darken-4">
      <img
        className="navbar-brand header-logo"
        src={Logo}
        alt="Muckleshoot Logo"
      ></img>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="floar-right navbar-nav mr-auto">
        <li className="nav-item">
                <Link to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/grants">Grants</Link>
              </li>

              <li className="nav-item">
                <Link to="/lending">Lending</Link>
              </li>

              <li className="nav-item">
                <Link to="/rentals">Rentals</Link>
              </li>

              <li className="nav-item">
                <Link to="/elders">Elders</Link>
              </li>

              <li className="nav-item">
                <Link to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/maintenance">Maintenance</Link>
              </li>

              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar_Bootstrap;

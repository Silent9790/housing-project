import React from "react";
import Logo from "../../pictures/muckleshootlogo.png";
import Grants from "../../pages/Grants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar red darken-4" style={{ height: "90px" }}>
        <div className="row" id="nav-mobile" style={{ margin: "0" }}>
          <div className="col s2">
            <img
              className="header-logo"
              src={Logo}
              alt="Muckleshoot Logo"
            ></img>
          </div>
          <div className="col s4">
            <h4 className="">NAIT Housing Authority</h4>
          </div>

          <div className="col s6">
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/grants">Grants</Link>
              </li>

              <li>
                <Link to="/lending">Lending</Link>
              </li>

              <li>
                <Link to="/rentals">Rentals</Link>
              </li>
              <li>
                <Link to="/elders">Elders</Link>
              </li>

              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// add right to Ul class if we want to align the links to the right.
//TODO: Figure out why the Materialize styles isn't working.

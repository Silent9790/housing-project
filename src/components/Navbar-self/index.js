import React from "react";
import "./style.css";
import Logo from "../../pictures/muckleshootlogo.png";
import burger from "../../pictures/burger.png"
import { BrowserRouter as Route, Link } from "react-router-dom";

function Navbarself() {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="topnav">
        <div className="navbar-2 red darken-4">
          <div className="row">
            <div className="col s2">
              <img
                className="header-logo"
                src={Logo}
                alt="Muckleshoot Logo"
              ></img>
            </div>
            <div className="col">
              <h5 className="navbar-white">Muckleshoot Housing Authority</h5>
            </div>
            <div>
              <button className="right burger-button" onClick={myFunction}>
              <img
                className="burger"
                src={burger}
                alt="hamburger"
              ></img>
              </button>
            </div>
          </div>
        </div>
        <div id="myLinks">
          <ul className="">
            <li>
              <Link to="/" onClick={myFunction}>Home </Link>
            </li>

            <li>
              <Link to="/grants" onClick={myFunction}>Grants</Link>
            </li>

            <li>
              <Link to="/lending" onClick={myFunction}>Lending</Link>
            </li>

            <li>
              <Link to="/rentals" onClick={myFunction}>Rentals</Link>
            </li>

            <li>
              <Link to="/elders" onClick={myFunction}>Elders</Link>
            </li>

            <li>
              <Link to="/team" onClick={myFunction}>Team</Link>
            </li>
            <li>
              <Link to="/maintenance" onClick={myFunction}>Maintenance</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbarself;

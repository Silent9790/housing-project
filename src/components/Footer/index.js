import React from "react";
import Logo from "../../pictures/muckleshootlogo.png";
import "./style.css";
// import {Link} from "reacet-router-dom";

function Footer(props) {
  return (
    <div className="page-footer brown lighten-3">
      <footer class=" brown lighten-3">
        <div className="row center-align">
          <h4 className="white-text">NAIT Housing </h4>
        </div>

        <div className="row">
          <div className="col s4 center-align">
            <h5 className="white-text">Links </h5>

            <div className="row">
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.muckleshootcasino.com/"
                >
                  Casino
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.muckleshootbingo.com/"
                >
                  Bingo
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <a
                  className="white-link"
                  href="#http://www.muckleshoot.nsn.us/community/news.aspx"
                >
                  Health/Wellness
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="http://whiteriveramphitheater.org/"
                >
                  White River Ampitheatre
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <a className="white-link" href="https://jointrivers.com/">
                  Joint Rivers
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="http://www.muckleshoot.nsn.us/default.aspx"
                >
                  Native Indian Tribe Government
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <a
                  className="white-link"
                  href="http://www.muckleshoottribalschool.org/"
                >
                  Tribal School
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.nwic.edu/nwic-sites/muckleshoot-campus/"
                >
                  Tribal College
                </a>
              </div>
            </div>
          </div>
          <div className="col s4 center-align">
            <img
              className="footer-logo"
              src={Logo}
              alt="Muckleshoot Logo"
            ></img>
          </div>
          <div className="col s2 center-align">
            <h5 className="white-text">Hours </h5>
          </div>
          <div className="col s2 center-align">
            <h5 className="white-text">Contact </h5>
            <ul>
              <br />

              <li>Phone Number 999-999-9999</li>
              <br />
              <li>"Address Here"</li>
              <br />
              <li>
                
                <a
                  href="#contact"
                  onClick={() => props.handlePageChange("Contact")}
                  className="white-link"
                >
                 
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="center-align">
            <p className="white-text"> © 2020 Copyright Text</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

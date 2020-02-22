import React from "react";
import Logo from "../../pictures/muckleshootlogo.png";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer className=" footer-color">
        <div className="row center-align">
          <h4 className="white-text">Muckleshoot Housing Authority</h4>
        </div>

        <div className="row">
          <div className="col s4 center-align">
            <h5 className="white-text">Links </h5>

            <div className="row">
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.muckleshootcasino.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casino
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.muckleshootbingo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health/Wellness
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="http://whiteriveramphitheater.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  White River Ampitheatre
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://jointrivers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Joint Rivers
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="http://www.muckleshoot.nsn.us/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tribal School
                </a>
              </div>
              <div className="col s6">
                <a
                  className="white-link"
                  href="https://www.nwic.edu/nwic-sites/muckleshoot-campus/"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <ul>
              <li className="white-text">Monday-Friday</li>
              <li className="white-text">8 am - 5pm</li>
            </ul>
          </div>
          <div className="col s2 center-align">
            <h5 className="white-text">Contact </h5>

            <ul>
              <li className="white-text">Phone Number 253-833-7616</li>
              <li className="white-text">Fax Number 253-876-2862</li>
              <li className="white-text">
                38037 158th Ave SE, Auburn, Wa 98092
              </li>
              <li className="white-link">
                <Link to="/contact" className="white-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div>
            <p className="white-text center-align"> © 2020 Copyright Text</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

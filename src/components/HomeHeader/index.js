import React from "react";
import "./style.css";
import logo from "../../pictures/idea1.PNG";

function HomeHeader() {
  return (
    <div className="home-div">
      {/* <div className="center-align">
        <h1>MUCKLESHOOT INDIAN TRIBE</h1>
        <br/>
        <img src={fish} alt="fish" className="fish1"></img>
        <img src={fish} alt="fish" className="fish2"></img>
        <div className="home-line">
        </div>
        <br/>
        <h2>HOUSING AUTHORITY</h2>
      </div>
      <br/>
  <br/>*/}

      <div className="center-align">
        <img src={logo} alt="logo" className="home-logo"></img>
      </div>
      <div className="center-align">
        <h5 className="italics">Helping you into a better future</h5>
      </div>
    </div>
  );
}

export default HomeHeader;

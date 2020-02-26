import React from "react";
import "./style.css";
import app1 from "../../pictures/LoanPt1.PNG";
import app2 from "../../pictures/LoanPt2.PNG";
import Housing from "../../pictures/LoanHousing.PNG";

function LendingCards() {
  return (
    <div>
      <div className="row lending-box center-align">
        <div className="Lending-cards" style={{ margin: "0 auto" }}>
          <div className="card lending-card-pdf" style={{ margin: "0 auto" }}>
            <div className="card-image">
              <img className="activator" src={app1} alt="App"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4 center-align">
                Application Part One
              </span>
              <div className="center-align">
                <br />
                <a
                  href="https://drive.google.com/file/d/1UmeWolFVgcBDNulGLN83W0upXC1g0v2Q/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download here
                </a>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4 center-align">
                <i className="material-icons right">close</i>
                <br />
                Application Part One
              </span>
              <p>
                This is part one of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>
          <br />
          <div className="card lending-card-pdf" style={{ margin: "0 auto" }}>
            <div className="card-image">
              <img className="activator" src={app2} alt="App"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4 center-align">
                Application Part Two
              </span>
              <div className="center-align">
                <br />
                <a
                  href="https://drive.google.com/file/d/0B4ZfYNSVBTNRQXAwQTNyZnVCQ0NuR19WOXhMZm9fMlVRcjkw/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download here
                </a>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4 center-align">
                <i className="material-icons right">close</i>
                <br />
                Application Part Two
              </span>
              <p>
                This is part two of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>
          <br />

          <div className="card lending-card-pdf" style={{ margin: "0 auto" }}>
            <div className="card-image">
              <img className="activator" src={Housing} alt="House"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4 center-align">
                Housing Stabilization Program
              </span>
              <div className="center-align">
                <br />
                <a
                  href="https://drive.google.com/file/d/1kft3enskBCHJQ3R0f5adMPugtjfVRiB_/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download here
                </a>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4 center-align">
                <i className="material-icons right">close</i>
                <br />
                Housing Stabilization Program
              </span>
              <p>
                The purpose of the Housing Stabilization Assistance Program is
                to assist low-income Muckleshoot Tribal members to obtain safe
                and affordable rental housing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LendingCards;

import React from "react";
import "./style.css";
import app1 from "../../pictures/LoanPt1.PNG";
import app2 from "../../pictures/LoanPt2.PNG";
import Housing from "../../pictures/LoanHousing.PNG";

function LendingCards() {
  return (
    <div>
      <div className="row lending-box">
        <div className="col s3"></div>
        <div className="col s6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={app1} alt="App"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Application Part One
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/1UmeWolFVgcBDNulGLN83W0upXC1g0v2Q/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download here
                </a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Application Part One<i className="material-icons right">close</i>
              </span>
              <p>
                This is part one of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={app2} alt="App"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Application Part Two
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/0B4ZfYNSVBTNRQXAwQTNyZnVCQ0NuR19WOXhMZm9fMlVRcjkw/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download here
                </a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Application Part Two<i className="material-icons right">close</i>
              </span>
              <p>
                This is part two of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={Housing} alt="House"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Housing Stabilization Program
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/1kft3enskBCHJQ3R0f5adMPugtjfVRiB_/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  This is a link
                </a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Housing Stabilization Program
                <i className="material-icons right">close</i>
              </span>
              <p>
                The purpose of the Housing Stabilization Assistance Program is
                to assist low-income Muckleshoot Tribal members to obtain safe
                and affordable rental housing.
              </p>
            </div>
          </div>
        </div>
        <div className="col s3"></div>
      </div>
    </div>
  );
}

export default LendingCards;

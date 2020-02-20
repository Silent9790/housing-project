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
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={app1}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Application Part One
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/1UmeWolFVgcBDNulGLN83W0upXC1g0v2Q/view?usp=sharing"
                  target="_blank"
                >
                  Download here
                </a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Application Part One<i class="material-icons right">close</i>
              </span>
              <p>
                This is part one of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={app2}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Application Part Two
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/0B4ZfYNSVBTNRQXAwQTNyZnVCQ0NuR19WOXhMZm9fMlVRcjkw/view?usp=sharing"
                  target="_blank"
                >
                  Download here
                </a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Application Part Two<i class="material-icons right">close</i>
              </span>
              <p>
                This is part two of the Housing Authority Application Checklist.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={Housing}></img>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                Housing Stabilization Program
                <i class="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  href="https://drive.google.com/file/d/1kft3enskBCHJQ3R0f5adMPugtjfVRiB_/view?usp=sharing"
                  target="_blank"
                >
                  This is a link
                </a>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                Housing Stabilization Program
                <i class="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
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

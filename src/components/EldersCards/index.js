import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

import HousingProgram from "../../pictures/HousingProgram.png";
import InsuranceAssistance from "../../pictures/InsuranceAssistance.png";

export default class RentalCards extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col s6 m6">
          <div className="row">
            <div className="card red darken-4">
              <div className="card-content white-text">
                <span className="card-title" style={{ fontWeight: "bold" }}>Elders Programs </span>
                <p><strong>Elder New Home Construction -</strong> Eligible
                Muckleshoot tribal elders may qualify for new home construction
                on their property, services include assistance in obtaining
                permits, leases and other required approvals. Architectural
                consulting, engineering, landscaping, and utility set up are
                also available.</p>
                <br />
                <p><strong>Eligibility:</strong> Tribal members must be 55 years
                of age or older, meet eligibility guidelines, have a
                BIA-approved lease, clear Title Status Report or deed to the
                property. To apply, complete the application and participate
                in all phases of the planning process.</p>
                <br />
                <strong>The forms below are used to used to determine eligibity and the approval process.</strong>
                <br />
                <br />
                <div className="row">
                  <div className="col s6">
                    <a
                      href="https://drive.google.com/file/d/1YoOlWrg4INe04Y6XrcvsWHaBlMV4cwiJ/view?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="elderPdf"
                        src={HousingProgram}
                        alt="pdf"
                      />
                    </a>
                  </div>
                  <div className="col s6">
                    <a
                      href="https://drive.google.com/file/d/1-K8tX2fT0cxdFIvLieAlAYp_gWJDthVg/view?usp=sharing"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="elderPdf"
                        src={InsuranceAssistance}
                        alt="pdf"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <h5>Elders Program Features: </h5>
        <ul className="collection">
          <li className="collection-item">Home Repair: Max is $90,000</li>
          <li className="collection-item">Home Assistance: Max is $90,000</li>
          <li className="collection-item">New House Construction: Max is $90,000</li>
        </ul>
        <br />
        <br />
      </div>
    );
  }
}

import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";

import HousingProgram from "../../pictures/HousingProgram.png";
import InsuranceAssistance from "../../pictures/InsuranceAssistance.png";

export default class RentalCards extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
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
                <span className="card-title">Elders Programs </span>
                <strong>Elder New Home Construction -</strong> Eligible
                Muckleshoot tribal elders may qualify for new home construction
                on their property, services include assistance in obtaining
                permits, leases and other required approvals. Architectural
                consulting, engineering, landscaping, and utility set up are
                also available.
                <p>
                  ELIGIBILITY: Open to elder tribal members over the age of 40.
                  <strong>ELIGIBILITY:</strong> Tribal members must be 55 years
                  of age or older, meet eligibility guidelines, have a
                  BIA-approved lease, clear Title Status Report or deed to the
                  property. To apply, complete the application and participate
                  in all phases of the planning process.
                </p>
                <strong>
                  The forms below are used to used to determine eligibity and
                  the approval process.{" "}
                </strong>
                <br />
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col s3">
                      <a
                        href="https://drive.google.com/file/d/1YoOlWrg4INe04Y6XrcvsWHaBlMV4cwiJ/view?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src={HousingProgram}
                          alt="pdf"
                          style={{ height: "300px", width: "300px"}}
                        />
                      </a>
                    </div>
                    <div className="col s3"></div>

                    <div className="col s3">
                      <a
                        href="https://drive.google.com/file/d/1-K8tX2fT0cxdFIvLieAlAYp_gWJDthVg/view?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src={InsuranceAssistance}
                          alt="pdf"
                          style={{ height: "300px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a
                  href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing"
                  target="_blank"
                >
                  Application PDF
                </a>
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
        {/* 
        <br />
        <br />

        <div className="col s6 m6">
          <div className="card horizontal teal lighten-2 ">
            <img className="houseImg" src={house4} alt="profile" />
            <div className="card-stacked">
              <div className="card-content">
                <a href="https://www.google.com/">Housing</a>
                <p>Location: Skopapsh Village</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col s6 m6">
          <div className="card horizontal teal lighten-2 ">
            <img className="houseImg" src={house2} alt="profile" />
            <div className="card-stacked">
              <div className="card-content">
                <a href="https://www.google.com/">Housing</a>
                <p>Location: Skopapsh Village</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="col s6 m6">
          <div className="card horizontal teal lighten-2 ">
            <img className="houseImg" src={house3} alt="profile" />
            <div className="card-stacked">
              <div className="card-content">
                <a href="https://www.google.com/">Housing</a>
                <p>Location: Skopapsh Village</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="col s6 m6">
          <div className="card horizontal teal lighten-2 ">
            <img className="houseImg" src={house2} alt="profile" />
            <div className="card-stacked">
              <div className="card-content">
                <a href="https://www.google.com/">Housing</a>
                <p>Location: Skopapsh Village</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <br />
         */}
      </div>
    );
  }
}

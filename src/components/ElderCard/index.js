import React from "react";
import "./style.css";

function ElderCard() {
  return (
    <div className="card">
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> */}
      {/* <a className="navbar-brand" href="/"> */}
      <div className="card-panel teal lighten-2">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col s5">
              <p>
                <strong>Elder New Home Construction -</strong> Eligible Muckleshoot tribal elders
                may qualify for new home construction on their property,
                services include assistance in obtaining permits, leases and
                other required approvals. Architectural consulting, engineering,
                landscaping, and utility set up are also available.
              </p>
            </div>
            <div className="col s1"></div>
            <div className="col s5">
              <p>
                <strong>ELIGIBILITY:</strong> Tribal members must be 55 years of age or older,
                meet eligibility guidelines, have a BIA-approved lease, clear
                Title Status Report or deed to the property. To apply, complete
                the application and participate in all phases of the planning
                process.
              </p>
            </div>
          </div>
            <strong>The forms below are used to used to determine eligibity and the approval process</strong>
        </div>
      </div>
      {/* #b2ebf2 cyan lighten-4 */}
    </div>
  );
}

export default ElderCard;

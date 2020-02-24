import React from "react";
import "./style.css";

function LendingAbout() {
  return (
    <div className="col s12">
      <div className="row">
        <div className="card red darken-4">
          <div className="card-content white-text">
            <span className="card-title">Lending</span>
            <p>
              Home Loans up to $567,500 (or appraised value, whichever is less)
              at 1% interest are available for purchases within a 30-mile radius
              of the former tribal hall chimney (located at 39015 172nd Avenue
              SE, Auburn, Washington 98092).{" "}
            </p>
            <br />
            <p>
              ELIGIBILITY: Limited to tribal members who are home
              owner-occupants, have completed the Housing Authority's home buyer
              training course, and meet income, down payment, and credit
              conditions, which financially satisfy the MHLP loan requirements.
            </p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>

      <div className="row">
        <div>
          <h4>Loans provided include:</h4>
          <ul className="collection">
            <li className="collection-item">
              New construction of single-family homes on tribal lands or
              individual allotted lands, constructed through the Housing
              Authority.
            </li>
            <li className="collection-item">
              Purchase of new and previously occupied stick-built or modular
              single-family homes.
            </li>
            <li className="collection-item">
              Refinancing of existing homes, including mobile homes that were
              purchased prior to June 2000.
            </li>
            <li className="collection-item">
              Rehabilitation of houses and mobile homes (on the reservation
              only).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default LendingAbout;

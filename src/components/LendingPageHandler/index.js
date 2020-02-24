import React from "react";
import LendingCards from "../LendingCards";
import LoanCalculator from "../LoanCalculator";
import CardContact from "../CardContact";
import CardContactSmall from "../CardContactSmall";
import Wrapper from "../Wrapper";
import "./style.css"

function LendingPageHandler() {
  return (
    <div>
      <div className="row lending-small">
        <Wrapper>
          <div>
            <p style={{ fontSize: "25px", fontweight: "bold" }}>
              Curious about your loan?
            </p>
            <p>Try our loan calculator tool:</p>
          </div>

          <LoanCalculator />
          <div className="contact-small">
          <CardContactSmall />

          </div>

          <LendingCards />
        </Wrapper>
      </div>

      <div className="row lending-normal">
        <div className="col s4">
          <div>
            <p style={{ fontSize: "25px", fontweight: "bold" }}>
              Curious about your loan?
            </p>
            <p>Try our loan calculator tool:</p>
          </div>

          <LoanCalculator />
          <CardContact />
        </div>
        <div className="col s8">
          <LendingCards />
        </div>
      </div>
    </div>
  );
}
export default LendingPageHandler;

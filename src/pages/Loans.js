import React from "react";
import LendingCards from "../components/LendingCards";
import LendingJumbotron from "../components/LendingJumbotron";
import LoanCalculator from "../components/LoanCalculator";
import LendingAbout from "../components/LendingCardAbout";
import CardContact from "../components/CardContact";

function Loans() {
  return (
    <div>
      <LendingJumbotron />
      <div className="container">
        <div className="row">
          <LendingAbout />
        </div>
        <div className="row">
          <div className="col s4">
            <div>
              <p style={{ fontSize: "25px", fontweight: "bold" }}>
                Curious about your loan?
              </p>
              <p>Try our loan calculator tool:</p>
            </div>

            <div>
              <LoanCalculator />
            </div>

            <div>
              <CardContact />
            </div>
          </div>
          <div className="col s8">
            <LendingCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loans;

//Below is the link for PDF file on its own  on GoogleDrive
// https://drive.google.com/open?id=1PmvEXVUEYmEKdxZVwSyS3Jf9b27xxXrC

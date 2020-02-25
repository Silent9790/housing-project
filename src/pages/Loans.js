import React from "react";
import LendingJumbotron from "../components/LendingJumbotron";
import LendingAbout from "../components/LendingCardAbout";
import LendingPageHandler from "../components/LendingPageHandler";



function Loans() {
  return (
    <div>
      <LendingJumbotron />
      <div className="container">
        <div className="row">
          <LendingAbout />
        </div>
        <LendingPageHandler />
      </div>
    </div>
  );
}

export default Loans;

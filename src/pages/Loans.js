import React from "react";
import LendingJumbotron from "../components/LendingJumbotron";
import LendingAbout from "../components/LendingCardAbout";
import LendingPageHandler from "../components/LendingPageHandler"


function Loans() {
  return (
    <div>
      <LendingJumbotron />
      <div className="container">
        <div className="row">
          <LendingAbout />
        </div>

        <LendingPageHandler/>

      </div>
    </div>
  );
}

export default Loans;

//Below is the link for PDF file on its own  on GoogleDrive
// https://drive.google.com/open?id=1PmvEXVUEYmEKdxZVwSyS3Jf9b27xxXrC

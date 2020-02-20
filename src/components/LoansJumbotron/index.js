import React, { useState } from "react";
// import LendingCard from "../LendingCard"

function LoansJumbotron({ children }) {
  // const [loanAmountInput, setLoanAmountInput] = useState("");

  // const [annualRateInput, setAnnualRateInput] = useState("");

  // function calculate() {
  //   const terms = document.getElementById("terms").value;
  //   const calculatingRate = (0.01 * annualRateInput) / 12;
  //   // const payment = Math.pow(1.005,360)
  //   const payment =
  //     loanAmountInput /
  //     ((Math.pow(1 + calculatingRate, terms) - 1) /
  //       (calculatingRate * Math.pow(1 + calculatingRate, terms)));
  //   alert(payment);
  // }

  // function handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   console.log(target);

  //   if (target.name === "loanAmount") {
  //     setLoanAmountInput(value);
  //   }

  //   if (target.name === "annualRate" && target.value.length < 6) {
  //     setAnnualRateInput(value);
  //   }
  // }

  /*^^^^^^^^^^^^ Used for calculator ^^^^^^^^^^^ */
  return (
    <div
      style={{
        height: 800,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
        backgroundColor: " tan"
      }}
      className="jumbotron"
    >
      {children}

      <h1>Loans</h1>

      {/* <LendingCard/> */}


    </div>
  );
}

export default LoansJumbotron;

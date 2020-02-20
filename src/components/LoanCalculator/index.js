import React, { useState } from "react";
import "./style.css"

function LoanCalculator() {
  /*vvvvvvvvvvvv Used for calculator vvvvvvvvvvv */
  const [loanAmountInput, setLoanAmountInput] = useState("");

  const [annualRateInput, setAnnualRateInput] = useState("");

  function calculate() {
    const terms = document.getElementById("terms").value;
    const calculatingRate = (0.01 * annualRateInput) / 12;
    // const payment = Math.pow(1.005,360)
    const payment =
      loanAmountInput /
      ((Math.pow(1 + calculatingRate, terms) - 1) /
        (calculatingRate * Math.pow(1 + calculatingRate, terms)));
    alert(payment);
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    console.log(target);

    if (target.name === "loanAmount") {
      setLoanAmountInput(value);
    }

    if (target.name === "annualRate" && target.value.length < 6) {
      setAnnualRateInput(value);
    }
  }

  /*^^^^^^^^^^^^ Used for calculator ^^^^^^^^^^^ */

  return (
    <div>
      <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
          <div className="card red darken-4">
            <div className="card-content white-text">
              <span className="card-title center-align">Loan Calculator</span>
              <div className="loanAmountWithLabel">
                <label htmlFor="loanAmount" className="text-white">Loan amount</label>
                <br></br>
                <input
                  type="number"
                  name="loanAmount"
                  placeholder="Loan amount"
                  required=""
                  style={{ width: "150px" }}
                  value={loanAmountInput}
                  onChange={handleInputChange}
                />
              </div>

              <div className="APRWithLabel">
                <label htmlFor="annualRate" className="text-white">Annual Percentage Rate</label>
                <br></br>
                <input
                  type="number"
                  name="annualRate"
                  placeholder="APR"
                  required=""
                  style={{ width: "150px" }}
                  value={annualRateInput}
                  onChange={handleInputChange}
                />
              </div>

              <div className="termsWithLabel">
                <label htmlFor="terms" className="text-white">Number of months</label>
                <select
                  name="terms"
                  id="terms"
                  required=""
                  style={{ display: "block", width: "130px" }}
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
            <div className="card-action center-align">
              <input type="submit" value="Estimate" id="estimate" onClick={calculate} />
            </div>
          </div>
        </div>
        <div className="col s2"></div>
      </div>
    </div>
  );
}

export default LoanCalculator;

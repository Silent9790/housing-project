
import React, { useState } from "react";

import LoansJumbotron from "../components/LoansJumbotron";


function Loans() {
      
    /*vvvvvvvvvvvv Used for calculator vvvvvvvvvvv */
    const [loanAmountInput, setLoanAmountInput] = useState("");

    const [annualRateInput, setAnnualRateInput] = useState("");

    function calculate(){
        const terms = (document.getElementById("terms").value);
        const calculatingRate  = (.01*annualRateInput)/12;
        // const payment = Math.pow(1.005,360)
        const payment = loanAmountInput/((Math.pow(1+calculatingRate, terms)-1)/(calculatingRate*Math.pow(1+calculatingRate, terms)))
        alert(payment)
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        console.log(target);
        
        if(target.name === "loanAmount"){
            setLoanAmountInput(value);
        }

        if(target.name === "annualRate" && target.value.length < 6){
            setAnnualRateInput(value)
        }  
    }

    /*^^^^^^^^^^^^ Used for calculator ^^^^^^^^^^^ */


    return (
        <div>

          <h1>Loans</h1>

          <div className = "loanAmountWithLabel">
                <label htmlFor = "loanAmount">Loan amount</label>
                <br></br>
                <input type="number" name = "loanAmount" placeholder="Loan amount" required="" style = {{width: "150px"}} value = {loanAmountInput} onChange = {handleInputChange}/>
            </div>

            <div className = "APRWithLabel">
                <label htmlFor = "annualRate">Annual Percentage Rate</label>
                <br></br>
                <input type = "number" name = "annualRate" placeholder = "APR" required = "" style = {{width: "150px"}} value = {annualRateInput} onChange = {handleInputChange}/>
            </div>

            <div className = "termsWithLabel">
                <label htmlFor = "terms">Number of months</label>
                <select name = "terms" id="terms" required="" style = {{display: "block", width: "100px"}}>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
            </select>
            </div>
            <input type="submit" value="Estimate" onClick = {calculate}/>


        </div>
      );
    }


export default Loans;

//Below is the link for PDF file on its own  on GoogleDrive
// https://drive.google.com/open?id=1PmvEXVUEYmEKdxZVwSyS3Jf9b27xxXrC
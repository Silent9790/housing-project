import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";

function Home() {

    /*vvvvvvvvvvvv Used for calculator vvvvvvvvvvv */
    const [loanAmountInput, setLoanAmountInput] = useState({
        value: ""
    });

    const [annualRateInput, setAnnualRateInput] = useState({
        value: ""
    })

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        setLoanAmountInput({
            loanAmountInput: value.value
        });
        setAnnualRateInput({
            annualRateInput: value.value
        });
    }

    /*^^^^^^^^^^^^ Used for calculator ^^^^^^^^^^^ */
    return (
        <div className="home">

            {/* <div className = "container"> */}
            <Jumbotron />
            {/* Need to add <Card /> component here with Carisol of images */}
            {/* <h1>Native American Housing Authority</h1> */}
            {/* Add the native american housing authority to the card or image carisol component */}

            <div className = "loanAmountWithLabel">
                <label for = "loanAmount">Loan amount</label>
                <br></br>
                <input type="number" name = "loanAmount" placeholder="Loan amount" required="" style = {{width: "150px"}} value = {loanAmountInput.value} onChange = {handleInputChange}/>
            </div>

            <div className = "APRWithLabel">
                <label for = "annualRate">Annual Percentage Rate</label>
                <br></br>
                <input type = "float" name = "annualRate" placeholder = "APR" required = "" style = {{width: "150px"}} value = {annualRateInput.value} onChange = {handleInputChange}/>
            </div>

            <div className = "termsWithLabel">
                <label for = "terms">Number of months</label>
                <select name = "terms" id="terms" required="" style = {{display: "block", width: "100px"}}>
                    <option value="12" selected="">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
            </select>
            </div>
            <input type="submit" value="Estimate" onClick = {alert= "clicked"}/>

   
        {/* <Mission /> */}
        </div>
    );
}

export default Home;

import React, { Component } from "react";
import M from "materialize-css";
// import "./style.css";
import house2 from "../../pictures/b3.jpeg";
import house1 from "../../pictures/b1.jpeg";
import house3 from "../../pictures/b4.jpeg";

// import ElderCard from "../ElderCard";
// import Sticky from "react-sticky-el";
import CardContact from "../CardContact";
import { BrowserRouter as Route, Link } from "react-router-dom";


// import HousingProgram from "../../pictures/HousingProgram.png";
import InsuranceAssistance from "../../pictures/InsuranceAssistance.png";

export default class RentalCards extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
    }

    render() {
        return (

            <div className="container">
                <div className="col s6 m6">
                    <div className="row">
                        <div className="card red darken-4">
                            <div className="card-content white-text">
                                <span className="card-title">Elders Programs </span>
                                <strong>Elder New Home Construction -</strong> Eligible Muckleshoot tribal elders
                may qualify for new home construction on their property,
                services include assistance in obtaining permits, leases and
                other required approvals. Architectural consulting, engineering,
                landscaping, and utility set up are also available.
                                <p>ELIGIBILITY: Open to elder tribal members over the age of 40.
                                    <strong>ELIGIBILITY:</strong> Tribal members must be 55 years of age or older,
                meet eligibility guidelines, have a BIA-approved lease, clear
                Title Status Report or deed to the property. To apply, complete
                the application and participate in all phases of the planning
                process.</p>

                                <strong>The forms below are used to used to determine eligibity and the approval process. </strong>
                                <br />
                                <br />
                                <div className="container">
                                    <div className="row">
                                        <div className="col s4">
                                            <a href="https://drive.google.com/file/d/1YoOlWrg4INe04Y6XrcvsWHaBlMV4cwiJ/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                                <img src={HousingProgram} alt="pdf" style={{ height: "300px" }} />
                                            </a>
                                        </div>
                                        <div className="col s3">

                                        </div>

                                        <div className="col s4">
                                            <a href="https://drive.google.com/file/d/1-K8tX2fT0cxdFIvLieAlAYp_gWJDthVg/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                                <img
                                                    src={InsuranceAssistance}
                                                    alt="pdf"
                                                    style={{ height: "300px" }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-action">
                                <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    {/* Contact Form */}
                    {/* <CardContact />  */}
                    <Link to="/contact">
                        <div
                            className="col s12"
                            className="white-text"

                        >
                            <div className="card horizontal teal lighten-2">
                                <div className="card-stacked">
                                    <div className="card-content center-align">
                                        <h5>Need to get in touch?</h5>
                                    </div>
                                    <div className="card-content center-align">
                                        <p>
                                            If you want some help, or you even have questions, click
                                            here to get in contact with us.
                    </p>
                                    </div>
                                    <div className="card-action">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* House Listings */}
                    <div className="container"></div>
                    <p style={{ fontSize: "25px", fontweight: "bold" }}>
                        Available Housing  </p>
                </div>

                <div className="col s6 m6">
                    <div className="card horizontal center grey lighten-2">
                        <div className="card-image" />
                        <img src={house2} alt="House" />
                        <div className="card-content">
                            <span className="card-title">Skopabsh Village</span>
                            <p>Location: Skopapsh Village</p>
                            <p>Phone: (123) 456-7890</p>
                            {/* </div> */}
                            {/* <br />  */}
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" rel="noopener noreferrer" target="_blank">View on Google Maps</a>
                            </div>
                        </div>

                    </div>
                </div>
                <br />

                <div className="col s6 m6">
                    <div className="card horizontal align-right grey lighten-2">
                        <div className="card-image" />
                        <img src={house1} alt="House" />
                        <div className="card-content">
                            <span className="card-title">Davis </span>
                            <p>Location: Skopapsh Village</p>
                            <p>Phone: (123) 456-7890</p>
                            {/* </div> */}
                            {/* <br />  */}
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" rel="noopener noreferrer" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}

                <br />
                <div className="col s6 m6">
                    <div className="card horizontal center grey lighten-2">
                        <div className="card-image" />
                        <img src={house2
                        } alt="House" />
                        <div className="card-content">
                            <span className="card-title">Cedar Village</span>
                            <p>Location: Cedar Village</p>
                            <p>Phone: (123) 456-7890</p>
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" rel="noopener noreferrer" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="col s6 m6">
                    <div className="card horizontal center grey lighten-2">
                        <div className="card-image" />
                        <img src={house1} alt="House" />
                        <div className="card-content">
                            <span className="card-title">Skopabsh Village</span>
                            <p>Location: Davis Village</p>
                            <p>Phone: (123) 456-7890</p>
                            {/* </div> */}
                            {/* <br />  */}
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" rel="noopener noreferrer" target="_blank">View on Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />

            </div>
        )
    }
}
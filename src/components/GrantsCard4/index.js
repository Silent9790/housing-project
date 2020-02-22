import React, { Component } from "react";
import M from "materialize-css";
import "./style.css";
import Leg1 from "../../pictures/leg3.jpeg";
// import lego2 from "../../pictures/a1.jpeg";
import house1 from "../../pictures/b4.jpeg";
import house2 from "../../pictures/b3.jpeg";
import CardContact from "../CardContact";




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
                                <span className="card-title">Grants </span>
                                <p>If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.  </p><br />
                                <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
{/* <CardContact />  */}
                <h5>Grant Possiblilities:</h5>
                <CardContact /> 

                {/* 
                <div className="row locationCards">
                    <div className="col s4 m4">
                        <div className="card grantsCard red darken-4">
                            <div className="card-image">
                                <img className="rentalImg" src={lego1} />
                                <span className="card-title">Down Payment</span>
                            </div>
                            <div className="card-content">
                                <p>  If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.   </p><br />
                            </div>
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" target="_blank">Apply Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s4 m4">
                        <div className="card grantsCard red darken-4">
                            <div className="card-image">
                                <img className="rentalImg" src={lego1} />
                                <span className="card-title">Home Repair </span>
                            </div>
                            <div className="card-content">
                                <p> The Tribal Housing Program provides owner-occupant tribal members with housing rehabilitation grant up to $45,000. Grants may be used for a variety of different projects. More details available upon request. </p><br />
                            </div>
                            <div className="card-action">
                                <a href="https://www.google.com/maps/place/39220+165th+Pl+SE,+Auburn,+WA+98092/@47.2499351,-122.1199569,16.48z/data=!4m5!3m4!1s0x5490f6d181c8b877:0x986a9b386626147b!8m2!3d47.2496201!4d-122.1202608" target="_blank">Apply Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                 */}
                <div className="container">
                    <div className="col s4 m4">
                        <div className="row">
                            <div className="card red darken-4">
                                <div className="card-image">
                                    <img className="grantsImg" src={house2} />
                                </div>
                                <span className="card-title">Down Payment Assistance</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                                    <p>If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.  </p><br />
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <div className="row">
                            <div className="card red darken-4">
                                <div className="card-image">
                                    <img className="grantsImg" src={house1} />
                                </div>
                                <span className="card-title">Down Payment Assistance</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                                    <p>If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.  </p><br />
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
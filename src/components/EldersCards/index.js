import React, { Component } from "react";
import M from "materialize-css";
// import "./style.css";
import Leg1 from "../../pictures/leg3.jpeg";
import house1 from "../../pictures/b4.jpeg";
import house2 from "../../pictures/b3.jpeg";
import ElderCard from "../ElderCard";
// import CardRentals from "../CardRentals"; //!!!!
import CardRentals from "../CardLinkRentals";

import HousingProgram from "../../pictures/HousingProgram.png";
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
                <ElderCard />
                {/* <ElderCard/> */}
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
                <div className="col s6 m6">
                    <div className="row">
                        <div className="card red darken-4">
                            <div className="card-content white-text">
                                <span className="card-title">Elders Programs </span>
                                <p>ELIGIBILITY: Open to elder tribal members over the age of 40. </p>
                            </div>
                            <div className="card-action">
                                <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h5>Elders Program Features: </h5>
                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Home Repair </div>
                        <div class="collapsible-body"><span>Max is $90,0000</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>Home Assistance</div>
                        <div class="collapsible-body"><span>Max is $90,000</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">add_circle_outline</i>New House Construction</div>
                        <div class="collapsible-body"><span>Max is $90,000</span></div>
                    </li>
                </ul>



                <h5>Elder Homes:</h5>
                <div className="container">
                    {/*<div className="col s4 m4">
                        <div className="row">
                            <div className="card red darken-4">
                                <div className="card-image">
                                    <img className="grantsImg" src={house2} />
                                </div>
                                <span className="card-title">New House Construction</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                    {/*}  <p>If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.  </p><br />
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col s4">
                        <CardRentals />
                    </div>

                    <div className="col s4 m4">
                        <div className="row">
                            <div className="card red darken-4">
                                <div className="card-image">
                                    <img className="grantsImg" src={house1} />
                                </div>
                                <span className="card-title">Home Repair</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4 m4">
                        <div className="row">
                            <div className="card red darken-4">
                                <div className="card-image">
                                    <img className="grantsImg" src={house1} />
                                </div>
                                <span className="card-title">Home Assistance</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
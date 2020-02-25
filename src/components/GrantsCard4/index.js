import React, { Component } from "react";
import M from "materialize-css";
import house1 from "../../pictures/b4.jpeg";
import house2 from "../../pictures/c4.jpeg";
import CardContact from "../GrantsCardContact";

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
                                <span className="card-title">Grants</span>
                                <p> The Tribal Housing Program provides owner-occupant tribal members with housing rehabilitation grant up to $45,000. Grants may be used for a variety of different projects.
                                </p><br />
                                <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://drive.google.com/file/d/1KCCTyYqQdzCqjmdpA4R9yy6CaeqyDyZk/view?usp=sharing" rel="noopener noreferrer" target="_blank">Application PDF</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <div className="container"> */}
                    <div className="col s6 m6">
                        <div className="row">
                            <div className="card  white-text red darken-4">
                                <div className="card-image">

                                    {/* <img className="grantsImg" src={house2} style = {{width: "40vw", height: "22vw" } /> */}

                                </div>
                                <span className="card-title">Down Payment Assistance</span>
                                <div className="card-content white-text">
                                    {/* <span className="card-title">Grants </span> */}
                                    <p>If you're a new to the world of grants, we have the home loan experts and resources to help you on your home buying journey. MIT Housing Authority homebuyers can receive up to $45,000 in down-payment assistance.  </p><br />
                                    <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                                </div>
                                <div className="card-action">
                                    <a href="https://drive.google.com/file/d/1DbFm-xqE074PASreCpoHtumR7b_QHGnw/view?usp=sharing" target="_blank">Application PDF</a>
                                </div>
                                {/* </div> */}
                            </div>
                            {/* <GrantsCardContact />  */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
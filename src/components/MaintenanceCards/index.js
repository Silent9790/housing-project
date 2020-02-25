import React , { Component } from "react";
import "./style.css";
import M from "materialize-css";
import Town1 from "../../pictures/c8.jpeg"
import Town2 from "../../pictures/c7.jpeg"
import Town3 from "../../pictures/c6.jpeg";
import Guy5 from "../../pictures/c4.jpeg";
import Guy7 from "../../pictures/c9.jpeg";

export default class MaintenanceCards extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
            return instances;
        });
    }
    render() {
        return (
            <div className="container">
            <div className="col s6 m6">
                <div className="row">
                    <div className="card red darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">Maintenance Department</span>
                            <p>The Maintenance Department services the rental homes, apartments and Muckleshoot properties.  </p><br />
                        </div>
                        <div className="card-action">
                            <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Application PDF</a>
                        </div>
                    </div>
                </div>
            </div>

            <h5>About the Maintenance Department</h5>
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header"><i className="material-icons">add_circle_outline</i>Broke something?</div>
                    <div className="collapsible-body"><span>We'll fix it.</span></div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">add_circle_outline</i>Natural Disaster?</div>
                    <div className="collapsible-body"><span>We're on it.</span></div>
                </li>
            </ul>



            <h5>Our Team</h5>
            <div className="row locationCards">
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={Town1} alt="Town" />
                            {/* <span className="card-title">Rental Division</span> */}
                        </div>
                        <div className="card-content">
                            <p>Assisting the rental properties with all their needs.</p><br/>
                        </div>
                        <div className="card-action">
                            <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank">Contact us</a>
                        </div>
                    </div>
                </div>

                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={Town2} alt="Town" />
                            {/* <span className="card-title">Landscape</span> */}
                        </div>
                        <div className="card-content">
                            <p>Neighborhood need a touch up? Call us!</p><br/>
                        </div>
                        <div className="card-action">
                        <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank">Reach out</a>
                        </div>
                    </div>
                </div>

                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={Town3} alt="Town" />
                            {/* <span className="card-title">Home Repair</span> */}
                        </div>
                        <div className="card-content">
                            <p>Broken door? We can fix it.</p>
                        </div>
                        <div className="card-action">
                        <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank">We're here to help</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s6 m6">
                <div className="card rentalCard">
                    {/* <AddressCheck/> */}
                </div>
            </div>
        </div>
        )
    }
}
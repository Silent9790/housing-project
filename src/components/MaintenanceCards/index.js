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
                            <span className="card-title" style={{ fontWeight: "bold" }}>Maintenance Department</span>
                            <p>The Maintenance Department services the rental homes, apartments and Muckleshoot properties.  </p><br />
                        </div>
                        <div className="card-action">
                            <a href="https://drive.google.com/file/d/1ni7SXj7NiSVokzoPO3eUL5sQ-k6-U3Xq/view?usp=sharing"  rel="noopener noreferrer" target="_blank">Application PDF</a>
                        </div>
                    </div>
                </div>
            </div>

            <h5>About the Maintenance Department</h5>
            <ul className="collection">
                <li className="collection-item">
                    Broke something? We'll fix it.
                </li>
                <li className="collection-item">
                    Natural Disaster? We're on it.
                </li>
            </ul>

            <h5>Our Team</h5>
            <div className="center-align maintence-cards-wrapper">

                    <div className="card maintence-card" style={{margin:"2px",marginTop:"20px"}}>
                        <div className="card-image">
                            <img src={Town1} alt="Town" />
                        </div>
                        <div className="card-content">
                            <p>Assisting the rental properties with all their needs.</p><br/>
                        </div>
                        <div className="card-action">
                            <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank" style={{margin: "0 auto"}}>Contact us</a>
                        </div>
                    </div>

                    <div className="card maintence-card" style={{margin:"2px", marginTop:"20px"}}>
                        <div className="card-image">
                            <img src={Town2} alt="Town" />
                        </div>
                        <div className="card-content">
                            <p>Neighborhood need a touch up? Call us!</p><br/>
                        </div>
                        <div className="card-action">
                        <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank" style={{margin: "0 auto"}}>Reach out</a>
                        </div>
                    </div>

                    <div className="card maintence-card" style={{margin:"2px", marginTop:"20px"}}>
                        <div className="card-image">
                            <img src={Town3} alt="Town" />
                        </div>
                        <div className="card-content">
                            <p>Broken door? We can fix it.</p><br/>
                        </div>
                        <div className="card-action">
                        <a href="http://localhost:3000/contact"  rel="noopener noreferrer" target="_blank" style={{margin: "0 auto"}}
                        className="center-align">We're here to help</a>
                        </div>
                    </div>

            </div>
           
        </div>
        )
    }
}
import React from "react";
// import "./style.css";s
import Woman from "../../pictures/maintenance1.jpeg"
import One from "../../pictures/emergency1.jpeg"
import Two from "../../pictures/emergency2.jpeg"
import Three from "../../pictures/emergency3.jpeg"
import Four from "../../pictures/emergency4.jpeg"


function MaintenanceCards() {
    return (
        <div className="container">
            <h5 id="teamIntroText">Departments</h5>
            <div className="col s6 m6">
                    <div className="card horizontal red darken-4">
                        <img className="teamProfileImg circle" src={Four} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">Emergency</a>
                                <p>Email: tas@jp.tas</p>
                                <p>Phone: (000) 456 - 1238</p>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className="col s6 m6">
                    <div className="card horizontal teal lighten-2 ">
                        <img className="teamProfileImg circle" src={Two} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">Unit Turn</a>
                                <p>Email: philliam@phil.phillip</p>
                                <p>Phone: (123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card horizontal teal lighten-2">
                        <img className="teamProfileImg circle" src={Three} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">Rental Maintenance</a>
                                <p>Email: nick@seto.nicks</p>
                                <p>Phone: (000) 456 - 1234</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card horizontal teal lighten-2">
                        <img className="teamProfileImg circle" src={One} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">Construction</a>
                                <p>Email: aiden@den.aiden</p>
                                <p>Phone: (000) 456 - 1235</p>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    );
}

export default MaintenanceCards;
import React from "react";
import "./style.css";
import Guy2 from "../../pictures/c8.jpeg"
import Guy1 from "../../pictures/c7.jpeg"
import Guy3 from "../../pictures/c6.jpeg";
import Guy5 from "../../pictures/c4.jpeg";
import Guy6 from "../../pictures/c1.jpeg";
import Guy7 from "../../pictures/c9.jpeg";


function MaintenanceCards() {
    return (
        <div className="container">

       
<div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal red darken-4">
                        <img className="teamProfileImg circle" src={Guy1} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">JOHN JACKSON</a>
                                <p>Position: Emergency</p>
                                <p>Email: john@bomb.com</p>
                                <p>Phone: (111) 111-1111</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy2} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">JACK JOHNSON</a>
                                <p>Position: Lord of Embers</p>
                                <p>Email: jack@jack.jack</p>
                                <p>Phone: (111) 111-1112</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy3} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">NICK SETO</a>
                                <p>Position: Hero</p>
                                <p>Email: wow@wow.wow</p>
                                <p>Phone: (123) 456-8008</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy7} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">PHIL DUNHAM</a>
                                <p>Position: Master-at-Arms</p>
                                <p>Email: philliam@phil.phillip</p>
                                <p>Phone: (999) 999-9998</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy5} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">AIDEN WILLET</a>
                                <p>Position: Nazgul</p>
                                <p>Email: brohama@bro.bruh</p>
                                <p>Phone: (777) 324-9781</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy6} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">TASI PEDRO</a>
                                <p>Position: Accountant</p>
                                <p>Email: tasi@tasi.whew</p>
                                <p>Phone: (324) 234-7981</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div> 
        </div>
    );
}

export default MaintenanceCards;
import React from "react";
import "./style.css";
import Guy from "../../pictures/placeholderman.jpg"

function TeamCards() {
    return (
        <div className="container">
            <h5 id="teamIntroText">Meet Our Team:</h5>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">JOHN JACKSON</a>
                                <p>Position: Post Master General</p>
                                <p>Location: Mountains</p>
                                <p>Email: john@bomb.com</p>
                                <p>Phone: (111) 111-1111</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">JACK JOHNSON</a>
                                <p>Position: Lord of Embers</p>
                                <p>Location: The Sky Fortress</p>
                                <p>Email: jack@jack.jack</p>
                                <p>Phone: (111) 111-1112</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">NICK SETO</a>
                                <p>Position: Hero</p>
                                <p>Location: The Mind</p>
                                <p>Email: wow@wow.wow</p>
                                <p>Phone: (123) 456-8008</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">PHIL DUNHAM</a>
                                <p>Position: Master-at-Arms</p>
                                <p>Location: Everywhere</p>
                                <p>Email: philliam@phil.phillip</p>
                                <p>Phone: (999) 999-9998</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">AIDEN WILLET</a>
                                <p>Position: Nazgul</p>
                                <p>Location: Groovytown</p>
                                <p>Email: brohama@bro.bruh</p>
                                <p>Phone: (777) 324-9781</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy} />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="#">TASI PEDRO</a>
                                <p>Position: Accountant</p>
                                <p>Location: The Good Place</p>
                                <p>Email: tasi@tasi.whew</p>
                                <p>Phone: (324) 234-7981</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TeamCards;
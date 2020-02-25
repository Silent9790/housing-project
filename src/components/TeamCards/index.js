import React from "react";
import "./style.css";
import Guy from "../../pictures/placeholderman.jpg"
import Town1 from "../../pictures/c1.jpeg";
import Town2 from "../../pictures/c9-copy.jpg";
import Town3 from "../../pictures/c4-copy.jpeg";
import Guy5 from "../../pictures/c7.jpeg";
import Guy6 from "../../pictures/c6.jpeg";
import Guy7 from "../../pictures/c8.jpeg";




function TeamCards() {
    return (
        <div className="container">
            <div className="row locationCards">
                {/* <div className="row">
                    <div className="card red darken-4">
                        <span className="card-title"> The Team: </span> */}

                        <div className="col s4 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Town1} alt="Town" />
                                </div>
                                <div className="card-content">
                                    <a href="https://www.google.com/">JOHN JACKSON</a>
                                    <p>Position: Post Master General</p>
                                    <p>Email: john@bomb.com</p>
                                    <p>Phone: (111) 111-1111</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s4 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Town2} alt="Town" />
                                </div>
                                <div className="card-content">
                                    <a href="https://www.google.com/">JACK JOHNSON</a>
                                    <p>Position: Lord of Embers</p>
                                    <p>Email: jack@jack.jack</p>
                                    <p>Phone: (111) 111-1112</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s4 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Town3} alt="Town" />
                                </div>
                                <div className="card-content">
                                    <a href="https://www.google.com/">NICK SETO</a>
                                    <p>Position: Hero</p>
                                    <p>Email: wow@wow.wow</p>
                                    <p>Phone: (123) 456-8008</p>
                                </div>
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            {/* <div className="row">
                <div className="col s4 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src={Town3} alt="Town" />
                        </div>
                        <div className="card-content">
                            <a href="https://www.google.com/">NICK SETO</a>
                            <p>Position: Hero</p>
                            <p>Location: The Mind</p>
                            <p>Email: wow@wow.wow</p>
                            <p>Phone: (123) 456-8008</p>
                        </div>
                    </div>
                </div> */}

            {/* </div> */}
            {/* added on below */}
       </div> 
        </div >
        //  </div >
//  </div > 
    );
}

export default TeamCards;

{/* 
            <div className="row">
                <div className="col s6 m6">
                    <div className="card horizontal">
                        <img className="teamProfileImg circle" src={Guy1} alt="profile" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <a href="https://www.google.com/">JOHN JACKSON</a>
                                <p>Position: Post Master General</p>
                                <p>Location: Mountains</p>
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
                                <p>Location: The Sky Fortress</p>
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
                                <p>Location: The Mind</p>
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
                                <p>Location: Everywhere</p>
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
                                <p>Location: Groovytown</p>
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
                                <p>Location: The Good Place</p>
                                <p>Email: tasi@tasi.whew</p>
                                <p>Phone: (324) 234-7981</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>  */}
{/* </div> */ }

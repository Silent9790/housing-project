import React from "react";
import "./style.css";
import Town1 from "../../pictures/town1.jpg";
import Town2 from "../../pictures/town2.jpg";
import Town3 from "../../pictures/town3.jpg";
import AddressCheck from "../AddressCheck"



function RentalCards() {
    return (
        <div className="container">

            <div className="col s6 m6">
                <div className="row">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Rental Housing</span>
                            <p>The Rental Housing Program provides houses and apartments to eligible tribal members at low-cost, affordable rental fees. Services include access to rental homes, rental apartments, recovery house, senior apartments, and transition housing for persons completing treatment. We also provide apartment housing for seniors and have emergency housing.</p><br/>
                            <p>ELIGIBILITY: Open to tribal members whose income is currently at or below King County median income. A hair sample drug test must be taken and passed in order to qualify.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col s6 m6">
                <div className="row">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Rental Housing Benefits:</span>
                            <ul>
                                <li className="benefitsList">Low rent based on household income</li>
                                <li className="benefitsList">Utility allowance based on household usage</li>
                                <li className="benefitsList">Garbage, water, sewer and lawn service provided</li>
                                <li className="benefitsList">Several ADA homes availible for accessibility needs</li>
                                <li className="benefitsList">Special rents for Elders, Veterans and Disabled Households</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h5>Our Locations</h5>

            <div className="row locationCards">
                <div className="col s6 m6">
                    <div className="card rentalCard">
                        <div className="card-image">
                            <img className="rentalImg" src={Town1} />
                            <span className="card-title">Skopabsh Village</span>
                        </div>
                        <div className="card-content">
                            <p>40 homes built in the 1970s'</p>
                        </div>
                        <div className="card-action">
                            <a href="https://www.google.com/maps/place/38026+158th+Ave+SE,+Auburn,+WA+98092/@47.2616995,-122.1394581,14.6z/data=!4m5!3m4!1s0x5490f6dd2bf87749:0x6415079db8a26744!8m2!3d47.260361!4d-122.1297829" target="_blank">View on Google Maps</a>
                        </div>
                    </div>
                </div>
            
                <div className="col s6 m6">
                    <div className="card rentalCard">
                        <div className="card-image">
                            <img className="rentalImg" src={Town2} />
                            <span className="card-title">Cedar Village</span>
                        </div>
                        <div className="card-content">
                            <p>24 homes built in 1997</p>
                        </div>
                        <div className="card-action">
                            <a href="https://www.google.com/maps/place/39220+165th+Pl+SE,+Auburn,+WA+98092/@47.2499351,-122.1199569,16.48z/data=!4m5!3m4!1s0x5490f6d181c8b877:0x986a9b386626147b!8m2!3d47.2496201!4d-122.1202608" target="_blank">View on Google Maps</a>
                        </div>
                    </div>
                </div>
            
                <div className="col s6 m6">
                    <div className="card rentalCard">
                        <div className="card-image">
                            <img className="rentalImg" src={Town3} />
                            <span className="card-title">Davis Community</span>
                        </div>
                        <div className="card-content">
                            <p>48 homes built in 2006 (6 Tribal and 2 ARRA Homes)</p>
                        </div>
                        <div className="card-action">
                            <a href="#" target="_blank">View on Google Maps</a>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card rentalCard">
                        <AddressCheck/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RentalCards;
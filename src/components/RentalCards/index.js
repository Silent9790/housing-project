import React from "react";
import "./style.css";
import Town1 from "../../pictures/town1.jpg";
import Town2 from "../../pictures/town2.jpg";
import Town3 from "../../pictures/town3.jpg";



function RentalCards() {
    return (
        <div>
            <h5>Our Locations</h5>
            <div class="row locationCards">
                <div class="col s12 m7">
                    <div class="card rentalCard">
                        <div class="card-image">
                            <img className="rentalImg" src={Town1} />
                            <span class="card-title">Skopabsh Village</span>
                        </div>
                        <div class="card-content">
                            <p>40 homes built in the 1970s'</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            
                <div class="col s12 m7">
                    <div class="card rentalCard">
                        <div class="card-image">
                            <img className="rentalImg" src={Town2} />
                            <span class="card-title">Cedar Village</span>
                        </div>
                        <div class="card-content">
                            <p>24 homes built in 1997</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            
                <div class="col s12 m7">
                    <div class="card rentalCard">
                        <div class="card-image">
                            <img className="rentalImg" src={Town3} />
                            <span class="card-title">Davis Community</span>
                        </div>
                        <div class="card-content">
                            <p>48 homes built in 2006 (6 Tribal and 2 ARRA Homes)</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalCards;
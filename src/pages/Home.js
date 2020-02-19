import React from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Grants from "../pictures/grants.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <Jumbotron />
      <Carousel />

      {/* <h1>Native American Housing Authority</h1> */}
      {/* Add the native american housing authority to the card or image carisol component */}

      {/* <Mission /> */}

      <div className="row">
        <div className="col s6 card">
          <Link to="/grants">
            <div className="card">
              <div className="card-content">
                <p className="center-align homepage-cards">Grants</p>
              </div>
              <div className="card-image">
                <img src={Grants}></img>
              </div>
            </div>
          </Link>
        </div>

        <div class="col s6">
            <Link to="/Loans">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Lending</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div class="row">

        <div class="col s6">
            <Link to="/Rentals">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Rentals</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
          </Link>
        </div>
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Elders</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Team</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

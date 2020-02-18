import React from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel"

function Home() {
  return (
    <div className="home">
      {/* <div className = "container"> */}
      <Jumbotron />
      {/* Need to add <Card /> component here with Carisol of images */}
      <Carousel />

      {/* <h1>Native American Housing Authority</h1> */}
      {/* Add the native american housing authority to the card or image carisol component */}


      {/* <Mission /> */}

      <div class="row">
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img src="images/sample-1.jpg"></img>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
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

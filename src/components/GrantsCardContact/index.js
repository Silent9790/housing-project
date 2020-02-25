import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Sticky from "react-sticky-el";
import "./style.css";


function CardGrants() {
  return (
    <div>
      <div className="card cardlink" style={{ margin: "0 auto" }}>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4 center-align">
            Grants
          </span>
          <div className="center-align">
            <Link to="/grants">Get Started</Link>
          </div>
        
        {/* </div> */}

        <div className="card-reveal">
        <div className="card  teal lighten-2">
                 <div className="card-stacked">
                  <div className="card-content center-align">
                     <h5>Need to get in touch?</h5>
                   </div>
                 <div className="card-content center-align">
                   <p>
                       If you want some help, or you even have questions, click
                       here to get in contact with us.
                     </p>
                   </div>
                   <div className="card-action">
      </div>

                  </div>
                 </div>
               </div>
             </div>

      <div className="whitespace"></div>
    </div>
    </div>
  );
}

export default CardGrants;

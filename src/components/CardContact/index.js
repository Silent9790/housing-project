import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Sticky from "react-sticky-el";
import "./style.css"

class CardContact extends React.Component {
  render(){
  return(
        <Sticky>
          <Link to="/contact">
            <div
              className="col s12"
              className="white-text"
            
            >
              <div className="card horizontal teal lighten-2">
                <div className="card-stacked">
                  <div className="contact-content center-align">
                    <h5>Need to get in touch?</h5>
                  </div>
                  <div className="contact-content">
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
          </Link>
        </Sticky>  
  );
};
};
export default CardContact;

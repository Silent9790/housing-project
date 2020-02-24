import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

class CardContact extends React.Component {
  render(){
  return ( 
    <div>
          <Link to="/contact">
            <div
              className="white-text"            
            >
              <div className="card horizontal teal lighten-2">
                <div className="card-stacked">
                  <div className="card-content center-align">
                    <h5>Need to get in touch?</h5>
                  </div>
                  <div className="card-content">
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
          </div>
  );
};
};
export default CardContact;

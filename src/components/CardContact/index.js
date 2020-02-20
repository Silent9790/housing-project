import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function CardContact() {
  return (
    <Link to="/contact">
      <div className="col s12" className="black-text">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content center-align">
              <h5 className="black-text">Need to get in touch?</h5>
            </div>
            <div className="card-content">
              <p>
                If you Want some help, or you even have questions, click here to
                get in contact with us.
              </p>
            </div>
            <div className="card-action"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CardContact;

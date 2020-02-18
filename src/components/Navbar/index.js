import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar red darken-4">
        {/* <Link to ="../../../public/logo.png" className="brand-logo"> NAIT Housing Authority</Link> */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className=""
          >
            Home
          </a></li>

          <li><a
            href="#grants"
            onClick={() => props.handlePageChange("Grants")}
            className=""
          >
            Grants
          </a></li>

          <li><a
            href="#loans"
            onClick={() => props.handlePageChange("Loans")}
            className=""
          >
            Loans
          </a></li>

          <li><a
            href="#rentals"
            onClick={() => props.handlePageChange("Rentals")}
            className=""
          >
            Rentals
          </a></li>

          <li><a
            href="#ida"
            onClick={() => props.handlePageChange("IDA")}
            className=""
          >
            IDA
          </a></li>

          <li><a
            href="#elders"
            onClick={() => props.handlePageChange("Elders")}
            className=""
          >
            Elders
          </a></li>

          <li><a
            href="#locations"
            onClick={() => props.handlePageChange("Locations")}
            className=""
          >
            Locations
          </a></li>

          <li><a
            href="#team"
            onClick={() => props.handlePageChange("Team")}
            className=""
          >
            Team
          </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

// add right to Ul class if we want to align the links to the right.
//TODO: Figure out why the Materialize styles isn't working.

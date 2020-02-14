import React from "react";

function Navbar({ children }) {

    return (
        <div>
            <nav className = "navbar red darken-4">
                {/* <Link to ="../../../public/logo.png" className="brand-logo"> NAIT Housing Authority</Link> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="./">Home</a></li>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./grants">Grants</a></li>
                    <li><a href="./loans">Loans</a></li>
                    <li><a href="./rentals">Rentals</a></li>
                    <li><a href="./ida">IDA</a></li>
                    <li><a href="./elders">Elders</a></li>
                    <li><a href="./locations">Locations</a></li>
                    <li><a href="./team">Team</a></li>
                </ul>
            </nav>  
        </div >
    )
}

export default Navbar;


// add right to Ul class if we want to align the links to the right.
//TODO: Figure out why the Materialize styles isn't working.
import React from "react";

function Navbar({ children }) {
    return (
        <div>
            <nav >
                {/* I think that the width or the flexing of the nav bar would be fixed here  */}
                <div className="nav-wrapper red darken-2">
             
                    <div style={{ height: 150, clear: "both" }}>
                        < div className="navbar teal lighten-2" >
                            {/*  */}
                            {/* <link to="../../../public/logo.png" className="brand-logo"> NAIT Housing Authority</link> */}
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="sass.html">Home</a></li>
                                <li><a href="sass.html">Grants</a></li>
                                <li><a href="badges.html">Loans</a></li>
                                <li><a href="collapsible.html">Rentals</a></li>
                                <li><a href="collapsible.html">IDA</a></li>
                                <li><a href="collapsible.html">Elders</a></li>
                                <li><a href="collapsible.html">Locations</a></li>
                                <li><a href="collapsible.html">Team</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >

    );


}

export default Navbar;


// add right to Ul class if we want to align the links to the right.
//TODO: Figure out why the Materialize styles isn't working.
import React from "react";
// import {Link} from "reacet-router-dom";

function Footer({ children }) {
    return (

        <div className="page-footer  brown lighten-3">
            {/* I think that the width or the flexing of the nav bar would be fixed here  */}
            {/* <div className="container">
                <div className="row"> */}
                  <footer class="page-footer brown lighten-3"></footer>
            <div className="col l6 s12">
                <h5 className="white-text">NAIT Housing </h5>
                <p className="grey-text text-lighten-4"> </p>
            </div>
            <div className="col l4 offset-l2 s12 ">
                <h5 className="white-text ">Links</h5>
                <ul className = "brown-text text-lighten-2" > 
                    <div className ="col "></div>
                    <li ><a href="https://www.muckleshootcasino.com/">Casino</a></li>
                    <li><a href="https://www.muckleshootbingo.com/">Bingo</a></li>
                    <li><a href="#http://www.muckleshoot.nsn.us/community/news.aspx">Health/Wellness</a></li>
                    <li><a href="http://whiteriveramphitheater.org/">White River Ampitheatre</a></li>
                    <li><a href="https://jointrivers.com/">Joint Rivers</a></li>
                    <li><a href="http://www.muckleshoot.nsn.us/default.aspx">Native Indian Tribe Government</a></li>
                    <li><a href="http://www.muckleshoottribalschool.org/">Tribal School</a></li>
                    <li><a href="https://www.nwic.edu/nwic-sites/muckleshoot-campus/">Tribal College</a></li>
                </ul>
            {/* </div>
        </div> */}
        <div className="footer-copyright">
            <div className="container">
                © 2020 Copyright Text
             <a className="grey-text text-lighten-4 right" href="#!">Contact Link</a>
            </div>
        </div>
        </div>
        </div>
    )
};

export default Footer;

{/* <li><Link to="#!" className="grey-text text-lighten-3"> Casino</Link></li>
                    <li><Link to="#!" className="grey-text text-lighten-3"> Bingo</Link></li>
                    <li><Link to="#!" className="grey-text text-lighten-3"> Health/Wellness</Link></li>
                    <li><Link to="#!" className="grey-text text-lighten-3"> White River Shop</Link></li>
                    <li><Link to="#!" className="grey-text text-lighten-3"> White River Ampitheatre</Link></li>
                </ul> */}
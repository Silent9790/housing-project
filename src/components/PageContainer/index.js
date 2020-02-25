import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Contact from "../../pages/Contact";
import Elders from "../../pages/Elders";
import Grants from "../../pages/Grants";
import Maintenance from "../../pages/Maintenance";
import Home from "../../pages/Home";
import Lending from "../../pages/Loans";
import NoMatch from "../../pages/NoMatch";
import Rentals from "../../pages/Rental";
import Team from "../../pages/Team";
import Login from "../../pages/Login";
import CreateAccount from "../../pages/CreateAccount";
import LoginSuccess from "../../pages/LoginSuccess";
import Navbar from "../Navbar";
import Navbarself from "../Navbar-self";

import Footer from "../Footer";

import "./style.css"

class PagesContainer extends Component {
  state = {
    currentPage: "Home"
  };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  render() {
    return (
      <div className="container-fluid page-content">
        <Router>
          <div className="Navbar-normal">
          <Navbar />
          </div>
          <div className="Navbar-small">
          <Navbarself />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grants" component={Grants} />
            <Route exact path="/lending" component={Lending} />
            <Route exact path="/maintenance" component={Maintenance} />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/elders" component={Elders} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createaccount" component={CreateAccount} />
            <Route exact path="/loginsuccess" component={LoginSuccess} />
            <Route exact path="/nomatch" component={NoMatch} />

            <Route path="*">
              <Redirect to={"/nomatch"} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default PagesContainer;

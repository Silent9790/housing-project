import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Contact from "../pages/Contact";
import Elders from "../pages/Elders";
import Grants from "../pages/Grants";
import Home from "../pages/Home";
import Lending from "../pages/Loans";
import NoMatch from "../pages/NoMatch";
import Rentals from "../pages/Rental";
import Team from "../pages/Team";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

class PagesContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="bg">
        <div className="container-fluid">
          <Router>
            <Navbar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/grants" component={Grants} />
              <Route exact path="/lending" component={Lending} />
              <Route exact path="/rentals" component={Rentals} />
              <Route exact path="/elders" component={Elders} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/nomatch" component={NoMatch} />

              <Route path="*">
                <Redirect to={"/nomatch"} />
              </Route>
            </Switch>
            <Footer
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default PagesContainer;

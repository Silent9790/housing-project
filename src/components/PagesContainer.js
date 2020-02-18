import React, { Component } from "react";
import Contact from "../pages/Contact";
import Elders from "../pages/Elders";
import Grants from "../pages/Grants";
import Home from "../pages/Home";
import IDA from "../pages/IDA";
import Loans from "../pages/Loans";
import Locations from "../pages/Locations";
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
  
    renderPage = () => {
      if (this.state.currentPage === "Contact") {
        return <Contact />;
      } else if (this.state.currentPage === "Elders") {
        return <Elders />;
      } else if (this.state.currentPage === "Grants") {
        return <Grants />;
      } else if (this.state.currentPage === "Home") {
        return <Home />;
      }  else if (this.state.currentPage === "IDA") {
        return <IDA />;
      } else if (this.state.currentPage === "Loans") {
        return <Loans />;
      } else if (this.state.currentPage === "Locations") {
        return <Locations />;
      } else if (this.state.currentPage === "NoMatch") {
        return <NoMatch />;
      } else if (this.state.currentPage === "Rentals") {
        return <Rentals />;
      } else if (this.state.currentPage === "Team") {
        return <Team />;
      } else if (this.state.currentPage === "Contact"){
        return <Contact/>
      }
    };
  
    render() {
      return (
        <div className="bg">
          <div className="container-fluid">
            <Navbar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
  
            {this.renderPage()}
            <Footer/>

          </div>
        </div>
      );
    }
  }
  
  export default PagesContainer;
  
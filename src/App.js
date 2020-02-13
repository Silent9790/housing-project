import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import API from "../utils/API";
// importing pages

import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
import {
  BrowswerRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

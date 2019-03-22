import React, { Component } from "react";
import Navbar from "./components/navBar";
import "./App.css";
import Body from "./components/Body/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Body />
      </React.Fragment>
    );
  }
}

export default App;

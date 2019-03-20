import React, { Component } from "react";
import Navbar from "./components/navBar";
import "./App.css";
import Leftbody from "./components/leftBody";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Leftbody />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: "gray",
      border: "1px solid black",
    };
    return (
      <div className="Home">
        <h1>Welcome to codejobs</h1>
        <p>
          In this recipe you will learn how to add styles to components. If you
          want to learn more you can visit our Youtube Channel at{" "}
          <a href="#empty">Codejobs</a>
        </p>
        <p>
          <button style={buttonStyle}>Click me!</button>
        </p>
      </div>
    );
  }
}

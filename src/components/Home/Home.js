import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Firman Mardiyanto",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Mardiyanto Firman" });
    }, 1000);
  }

  render() {
    console.log(this.state.name);
    return (
      <div className="Home">
        <p>Hi my name is {this.state.name}</p>
      </div>
    );
  }
}

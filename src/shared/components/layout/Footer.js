import React, { Component } from "react";

export default class Footer extends Component {
  render = () => (
    <footer>&copy; Firman Mardiyanto {new Date().getFullYear()}</footer>
  );
}

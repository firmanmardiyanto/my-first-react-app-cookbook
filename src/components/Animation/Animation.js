/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  /* ComponentWillUpdate tidak lagi relevan, sebagai penggantinya pakai componentDidUpdate
  componentWillUpdate(newProps, newState) {
    if (!newState.show) {
      document.getElementById('fade').style = 'opacity: 1;';
    } else {
      document.getElementById('fade').style = 'opacity: 0;';
    }
  }
  */

  componentDidUpdate() {
    if (!this.state.show) {
      document.getElementById('fade').style = 'opacity: 1;';
    } else {
      document.getElementById('fade').style = 'opacity: 0;';
    }
  }

    toogleCollapse = () => {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }

    render() {
      return (
        <div className="Animation">
          <button type="button" onClick={this.toogleCollapse}>
            {this.state.show ? 'Collapse' : 'Expand'}
          </button>
          <div id="fade" className={this.state.show ? 'transition show' : 'transition'}>
            This text will disapper
          </div>
        </div>
      );
    }
}

export default Animation;

import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      alert: {
        type: "",
        message: "",
      },
      time: 0,
    };

    // Mendefinisikan waktu kerja
    this.times = {
      defaultTime: 1500, // 25 menit
      shortBreak: 300, // 5 menit
      longBreak: 900, // 15 menit
    };
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    this.setState({
      time: this.times.defaultTime,
    });
  };

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: "work",
        message: "Working!",
      },
    });
    return this.setTime(this.times.defaultTime);
  };

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: "shortBreak",
        message: "Taking a Short Break!",
      },
    });
    return this.setTime(this.times.shortBreak);
  };

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: "longBreak",
        message: "Taking a Long Break!",
      },
    });
    return this.setTime(this.times.longBreak);
  };

  setTime = (newTime) => {
    this.restartInterval();
    this.setState({
      time: newTime,
    });
  };

  restartInterval = () => {
    // Clear interval
    clearInterval(this.interval);

    // excecute counDown setiap detik
    this.interval = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    // jika time = 0 menampilkan peringatan Buzzz!
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: "buz",
          message: "Buzzzzzzzz!",
        },
      });
    } else {
      // Decrease time setiap detik
      this.setState({
        time: this.state.time - 1,
      });
    }
  };

  displayTimer(seconds) {
    // format waktu mm:ss
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  render() {
    const {
      alert: { message, type },
      time,
    } = this.state;
    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>{message}</div>

        <div className="timer">{this.displayTimer(time)}</div>

        <div className="types">
          <button className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>

          <button className="short" onClick={this.setTimeForShortBreak}>
            Short Break
          </button>

          <button className="long" onClick={this.setTimeForLongBreak}>
            Long Break
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;

import React from "react";
import "../styles/App.css";

class Timer extends React.Component {
  state = {
    isActive: this.props.autostart,
    time: this.props.time,
  };

  componentDidMount() {
    const { isActive } = this.state;
    if (isActive) this.startTimer();
  }

  setActive = (callback) => {
    this.setState((state) => {
      return { isActive: !state.isActive };
    }, callback);
  };

  startTimer = () => {
    const { step, onTick } = this.props;
    this.interval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((state) => {
          return { time: state.time - step };
        });
        onTick(this.state.time);
      }
    }, step * 1000);
  };

  switchTimer = (e) => {
    e.preventDefault();
    const { isActive } = this.state;
    this.setActive(() =>
      isActive ? clearInterval(this.interval) : this.startTimer()
    );
  };

  render() {
    const { isActive, time } = this.state;
    return (
      <div className="timer-container">
        <button onClick={this.switchTimer}>
          {isActive ? "Stop" : "Start"}
        </button>
        <p>{time}</p>
        <div className="download" style={{ width: `${time}px` }}></div>
      </div>
    );
  }
}

export default Timer;

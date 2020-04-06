import React from "react";
import "../styles/App.css";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer time={10} autostart={true} step={2} />
        <Timer time={30} autostart={false} step={2} />
      </div>
    );
  }
}

export default App;

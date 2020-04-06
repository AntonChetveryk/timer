import React from "react";
import "../styles/App.css";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer
          time={8}
          autostart={true}
          step={2}
          onTick={(time) => console.log("Осталось времени: " + time)}
        />
        <Timer
          time={300}
          autostart={false}
          step={1}
          onTick={(time) => console.log("Осталось времени: " + time)}
        />
      </div>
    );
  }
}

export default App;

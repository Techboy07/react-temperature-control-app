import { Component, useState } from "react";
import "./App.css";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");


  function setColor(n) {

    n >= 15 ? setTemperatureColor('hot') : setTemperatureColor('cold');
  }
  function incrementTemperature() {
    const newTemp = temperatureValue + 1
    newTemp > 30 ? newTemp = 30 : null;
    setColor(newTemp)
    setTemperatureValue(newTemp)
  }
  function decrementTemperature() {

    const newTemp = temperatureValue - 1
    newTemp < 0 ? newTemp = 0 : null;
    setColor(newTemp)
    setTemperatureValue(newTemp)
  }


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {` ${temperatureValue}°C`}
        </div>
      </div>
      <div className="button-container">

        <button onClick={decrementTemperature}>
          -
        </button>

        <button onClick={incrementTemperature}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

// % 5 6 - + ` = ~

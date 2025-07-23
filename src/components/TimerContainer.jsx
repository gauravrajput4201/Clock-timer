import React, { useState } from "react";
import "./TimerContainer.scss";
import Clock from "./Clock";


function TimerContainer() {
  const [timer, setTimer] = useState(0);
  return (
    <div className="container__timer">
      
      <h1>
      We are lunching soon
      </h1>
      <Clock
        timer={timer}
        updateTimer={(value) => setTimer(value)}
      />
 
    </div>
  );
}

export default TimerContainer;

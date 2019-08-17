import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//import "./test.css";

import Signature from "./Signature";

const projectName = "Pomodoro Clock";

function Controls(props) {
  return (
    <div className="timer-controls">
      <button id="start_stop">
        <i className="fas fa-play fa-lg" />
      </button>
      <button id="reset">
        <i className="fas fa-sync fa-lg" />
      </button>
    </div>
  );
}

function Session({ timer }) {
  function format() {
    let minutes = Math.floor(timer / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
  sdfsdf;
  let timeLeft = format();

  return (
    <div className="session">
      {timer}
      <div className="session-wrapper">
        <div id="timer-label">Session</div>
        <div id="time-left">{timeLeft}</div>
      </div>
    </div>
  );
}

function DisplayLengthSettings(props) {
  const settingName = props.settingName;
  const settingLengthWrapper = `${settingName.toLowerCase()}-length-wrapper`;
  const settingLabel = `${settingName.toLowerCase()}-label`;
  const settingDecrement = `${settingName.toLowerCase()}-decrement`;
  const settingIncrement = `${settingName.toLowerCase()}-increment`;
  const settingLength = `${settingName.toLowerCase()}-length`;

  return (
    <div className={settingLengthWrapper}>
      <div id={settingLabel}>{settingName} Length</div>
      <div className="settings-wrapper">
        <div id={settingDecrement}>
          <i className="fas fa-arrow-up" />
        </div>
        <div id={settingLength}>{props.timer}</div>
        <div id={settingIncrement}>
          <i className="fas fa-arrow-down" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const defaultSessionLength = 25;
  const defaultBreakLength = 5;

  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [breakLength, setBreakLength] = useState(defaultBreakLength);

  const [length, setLength] = useState(1500);

  const timer = sessionLength * 60;

  return (
    <div className="App">
      <h1>{projectName}</h1>
      <Controls />
      <Session timer={length} />
      <div className="settings">
        <DisplayLengthSettings settingName="Session" timer={sessionLength} />
        <DisplayLengthSettings settingName="Break" timer={breakLength} />
      </div>
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

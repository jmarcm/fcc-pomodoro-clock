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
  const [timeLeft, setTimeLeft] = useState(() => {
    console.log(timer);
    return timer + ":00";
  });
  function format(time) {
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = time - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  //let timeLeft = format();

  return (
    <div className="session">
      <div className="session-wrapper">
        <div id="timer-label">Session</div>
        <div id="time-left">{timer}</div>
      </div>
    </div>
  );
}

function DisplayLengthSettings(props) {
  // const [value, setValue] = useState(props.timer);
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
        <button id={settingDecrement} onClick={props.decrementSetting}>
          <i className="fas fa-arrow-down" />
        </button>
        <div id={settingLength}>{props.timer}</div>
        <button id={settingIncrement} onClick={props.incrementSetting}>
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </div>
  );
}

function App() {
  const defaultSessionLength = 25;
  const defaultBreakLength = 5;

  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [breakLength, setBreakLength] = useState(defaultBreakLength);

  //const [length, setLength] = useState(1500);

  function decrementSession() {
    setSessionLength(sessionLength - 1);
  }

  function incrementSession() {
    setSessionLength(sessionLength + 1);
  }

  function decrementBreak() {
    setBreakLength(breakLength - 1);
  }

  function incrementBreak() {
    setBreakLength(breakLength + 1);
  }

  return (
    <div className="App">
      <h1>{projectName}</h1>
      <Controls />
      <Session timer={sessionLength} />
      <div className="settings">
        <DisplayLengthSettings
          settingName="Session"
          timer={sessionLength}
          decrementSetting={decrementSession}
          incrementSetting={incrementSession}
        />
        <DisplayLengthSettings
          settingName="Break"
          timer={breakLength}
          decrementSetting={decrementBreak}
          incrementSetting={incrementBreak}
        />
      </div>
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

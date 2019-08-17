import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//import "./test.css";

import Signature from "./Signature";

const projectName = "Pomodoro Clock";

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
        <div id={settingLength}>{props.children}</div>
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

  return (
    <div className="App">
      <h1>{projectName}</h1>
      <div className="timer-controls">
        <button id="start_stop">
          <i class="fas fa-play fa-lg" />
        </button>
        <button id="reset">
          <i class="fas fa-sync fa-lg" />
        </button>
      </div>
      <div className="session">
        <div className="session-wrapper">
          <div id="timer-label">Session</div>
          <div id="time-left">25</div>
        </div>
      </div>
      <div className="settings">
        <DisplayLengthSettings settingName="Session">
          {sessionLength}
        </DisplayLengthSettings>
        <DisplayLengthSettings settingName="Break">
          {breakLength}
        </DisplayLengthSettings>
      </div>
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

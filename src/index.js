import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//import "./test.css";

import Signature from "./Signature";

const projectName = "Pomodoro Clock";

function App() {
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
        <div className="session-length">
          <div id="session-label">Session Length</div>
          <div className="settings-wrapper">
            <div id="session-decrement">
              <i class="fas fa-arrow-up" />
            </div>
            <div id="session-length">25</div>
            <div id="session-increment">
              <i class="fas fa-arrow-down" />
            </div>
          </div>
        </div>
        <div className="break-length">
          <div id="break-label">Break Length</div>
          <div className="settings-wrapper">
            <div id="break-decrement">
              <i class="fas fa-arrow-up" />
            </div>
            <div id="break-length">5</div>
            <div id="break-increment">
              <i class="fas fa-arrow-down" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

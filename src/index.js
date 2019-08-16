import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const projectName = "Pomodoro Clock";

function App() {
  return (
    <div className="App">
      <h1>{projectName}</h1>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

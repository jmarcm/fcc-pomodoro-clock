import React from "react";

function Signature(props) {
  const styleP = {
    margin: "0",
    fontFamily: "'Indie Flower', cursive",
    fontSize: "1.1em",
    color: "black",
    textAlign: "center"
  };

  const styleA = {
    color: "black"
  };

  return (
    <p style={styleP}>
      Coded and designed by{" "}
      <a
        href="https://codepen.io/jmarcm"
        target="_blank"
        rel="noreferrer noopener"
        style={styleA}
      >
        Jean-Marc
      </a>
    </p>
  );
}

export default Signature;

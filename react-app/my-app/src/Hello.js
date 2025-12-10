import React from "react";

function Hello(props) {
  return (
    <div style={{ padding: "10px", border: "1px solid gray" }}>
      <h2>Hello {props.name}!</h2>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
}

export default Hello;

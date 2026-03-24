import React from "react";

export default function Greeting(props) {
  return (
    <div className="greeting">
      <h2>
        React.js intro--{props.firstName}
        {props.age}
      </h2>
    </div>
  );
}

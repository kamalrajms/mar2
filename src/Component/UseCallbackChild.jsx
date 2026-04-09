import React from "react";

export default function UseCallbackChild({onClick}) {
  console.log("Child rendered");

  return <button onClick={onClick}>Child Button</button>;
}

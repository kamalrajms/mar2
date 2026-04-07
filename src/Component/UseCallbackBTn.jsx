import React from "react";

export default function UseCallbackBTn({ onclick }) {
  console.log("child render");

  return (
    <div>
      <button onClick={onclick}>error btn</button>
    </div>
  );
}

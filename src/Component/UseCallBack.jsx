import React, { useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <UseCallbackChild onClick={handleClick} />
    </div>
  );
}

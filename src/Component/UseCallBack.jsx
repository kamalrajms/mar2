import React, { useState } from "react";
import UseCallbackBTn from "./UseCallbackBTn";

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h2>useCallback-{count}</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <UseCallbackBTn onclick={handleClick}/>
    </div>
  );
}

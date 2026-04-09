import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UseIDHook from "../Component/UseIDHook";

export default function Home() {
  const [count, setCount] = useState(0);
  const page = useNavigate();

  useEffect(() => {
    if (count == 10) {
      page("/Contact");
    }
  }, [count]);
  return (
    <div>
      <h2>home component</h2>
      <UseIDHook/>
      <UseIDHook/>
      <UseIDHook/>
      <button onClick={() => page("/Contact")}>move to contact</button>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>incerement</button>
    </div>
  );
}

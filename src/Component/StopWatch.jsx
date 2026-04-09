import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running]);

  
  const start = () => {
    setRunning(true);
  };
  const stop = () => {
    setRunning(false);
  };
  const reset = () => {
    setRunning(false);
    setSec(0);
  };
  return (
    <div>
      <h1>timer:{sec}</h1>

      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

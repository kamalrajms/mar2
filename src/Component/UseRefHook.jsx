import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();

  const focusinput = () => {
    inputRef.current.focus();
  };
  // eg2

  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div>
      {/* eg1 */}
      <div>
        <input type="text" placeholder="Enter a name" ref={inputRef} />
        <button onClick={focusinput}>focus an input</button>
      </div>
      {/* eg2 */}
      <div>
        <h2>Timer:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </div>
    </div>
  );
}

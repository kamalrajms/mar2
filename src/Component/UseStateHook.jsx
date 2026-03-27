import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(true);
  console.log(user);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      <nav style={{ border: "2px solid #333", padding: "20px" }}>
        {user ? <p>welcome back....</p> : <p>please login....!</p>}

        {user && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
            laborum excepturi. Molestias eos quibusdam sunt maxime est
            repudiandae dolorem reiciendis excepturi delectus cum explicabo
            beatae quisquam, harum ipsa. Quidem, fuga!
          </p>
        )}
        <button onClick={() => setUser(!user)}>
          sign {user ? "out" : "in"}
        </button>
      </nav>
    </div>
  );
}
// !true===false
// !false=== true
import React, { useState, useEffect } from "react";

export default function UseEffectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // fetch,axios
  useEffect(() => {
    // api=[{},{},{},{},{},{}...]     --- raw data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // api=[{},{},{},{},{},{}...]     --- object data
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>user List</h1>
      <ul>
        {/* // user=[{id:1},{id:2},{},{},{},{}...]     --- object data */}
        {/* user={id:1,name:"rbrfiwhbf"} */}
        {user.map((user) => (
          <li key={user.id}>
            {user.name}--{user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

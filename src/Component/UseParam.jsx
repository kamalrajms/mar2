import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

export default function UseParam() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>User list</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blog/:${user.email}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

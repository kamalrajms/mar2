import React, { useEffect, useState } from "react";

export default function APIinegration() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoaing] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoaing(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch the data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoaing(false);
      }
    }
    fetchUser();
  }, []);
  if (loading) return <p>Loading.....</p>;
  if (error) return <p>{error}....</p>;
  return (
    <div>
      <h1>user data</h1>
      {user.map((user) => (
        <div
          key={user.id}
          style={{ border: "2px silod #333", padding: "20px" }}
        >
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
    </div>
  );
}

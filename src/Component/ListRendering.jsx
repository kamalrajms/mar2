import React from "react";

export default function ListRendering() {
  // eg 1
  const fruits = ["apple", "mango", "banana", "orange", "kjrw"];
  //   eg2
  const user = [
    { id: 1, name: "kumar" },
    { id: 2, name: "hari" },
    { id: 3, name: "rahul" },
  ];
  return (
    <div>
      {/* eg1 */}
      <h2>fruits list</h2>
      <ul>
        {fruits.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* eg2 */}
      <h2>user data</h2>
      <ul>
        {user.map((person)=>(
            <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}
// person= { id: 1, name: "kumar" }

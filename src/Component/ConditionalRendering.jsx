import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      <h3>ternary operator</h3>
      {user ? <p>welcome back....</p> : <p>please login ..!</p>}
      <h3>logical operator</h3>
      {user && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          reiciendis laudantium similique necessitatibus eveniet quisquam, qui
          sed deserunt sequi consectetur. Numquam perspiciatis dicta veritatis?
          Nisi ab dicta exercitationem accusamus suscipit!
        </p>
      )}
    </div>
  );
}

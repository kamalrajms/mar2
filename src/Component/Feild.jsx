import React, { useState } from "react";

export default function Feild() {
  const [name, setName] = useState("");

  const [checkbox, setCheckbox] = useState(true);
  console.log(checkbox);
  

  return (
    <div>
      <h2>Field</h2>

      {/* text */}
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>name:{name}</h3>

      {/* chechbox */}

      <input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
      />
      <label htmlFor="">check box</label>
    </div>
  );
}

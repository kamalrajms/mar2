import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const {name,value}=e.target
    setFormData({
      ...formData,       //previous value
      [name]: value,          //upting data
    });
  };
//   const handleChange = (e) => {
//     const {name,value}=e.target
//     setFormData({
//       ...formData,       
//       [e.target.name]: e.target.value,       
//     });
//   };
  return (
    <div>
      <h2>Reg-form</h2>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter a name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter a email"
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="enter a age"
      />
    </div>
  );
}

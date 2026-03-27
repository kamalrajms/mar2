import React, { useState } from "react";

export default function RegFromCondition() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChange2 = (e) => {
  //     const { name, checked } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: checked,
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.userName || !form.email || !form.password) {
      setError("All fielde are required");
      return;
    }
    if (!form.terms) {
      setError("accept the terms");
      return;
    }
    setError("");
    alert("submitted sucessfully");
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <input
          name="userName"
          type="text"
          value={form.userName}
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="enter a email"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="enter a password"
        />
        <input
          name="terms"
          type="checkbox"
          checked={form.terms}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

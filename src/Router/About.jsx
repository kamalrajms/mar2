import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <div className="sub-header">
        <Link to={"WebDev"}>Web development</Link>
        <Link to={"AppDev"}>App development</Link>
      </div>
      <Outlet />
    </div>
  );
}

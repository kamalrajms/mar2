import React from "react";
import Second from "./Second";

export default function First() {
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      first Component
      <Second />
    </div>
  );
}

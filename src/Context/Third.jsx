import React, { useContext } from "react";

import { Pass } from "../App";

export default function Third() {
  const passname = useContext(Pass);
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
      third component--{passname}
    </div>
  );
}

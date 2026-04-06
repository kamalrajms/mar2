import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextBtn() {
  const { color, setColor } = useContext(Pass);
  return (
    <div>
      <button onClick={() => setColor(color == "light" ? "black" : "light")}>
        Theme color
      </button>
    </div>
  );
}

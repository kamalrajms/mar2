import React,{useContext} from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";

export default function ContextForm() {
    const {color}=useContext(Pass)
  return (
    <div className={color}>
      <h2>Context form component</h2>
      <ContextField />
    </div>
  );
}

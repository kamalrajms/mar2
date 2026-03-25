import React from "react";
import Greeting from "./Greeting";
import DestructuringPROPS from "./DestructuringPROPS";
import Eg from "./Component/Eg";
import Externalcss from "./Component/Externalcss";
import ModuleStyle from "./Component/ModuleStyle";
import Objectstyle from "./Component/Objectstyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";

export default function App() {
  const name = "Kumar";
  const age = "55";
  const city = "salem";
  const name2 = "raj";
  const age2 = "55555";
  const city2 = "chennai";
  const name3 = "sai";
  const age3 = "484";
  const city3 = "madurai";

  return (
    <>
    <UseStateHook/>
      <ListRendering />
      <ConditionalRendering />
      <h1 style={{ padding: "20px", color: "red" }}>Hello {name}</h1>
      <Objectstyle />
      <ModuleStyle />
      <Externalcss />
      <Eg />
      <Greeting firstName={name} age={age} />
      <DestructuringPROPS name={name} age={age} city={city} />
      <DestructuringPROPS name={name2} age={age2} city={city2} />
      <DestructuringPROPS name={name3} age={age3} city={city3} />
    </>
  );
}

import React, { useState, useContext, createContext } from "react";
import Greeting from "./Greeting";
import DestructuringPROPS from "./DestructuringPROPS";
import Eg from "./Component/Eg";
import Externalcss from "./Component/Externalcss";
import ModuleStyle from "./Component/ModuleStyle";
import Objectstyle from "./Component/Objectstyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import Feild from "./Component/Feild";
import RegForm from "./Component/RegForm";
import RegFromCondition from "./Component/RegFromCondition";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import StopWatch from "./Component/StopWatch";
import UseEffectAPI from "./Component/UseEffectAPI";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";
import UseReducerHook from "./Component/UseReducerHook";
import ReducerHookForm from "./Component/ReducerHookForm";
import UseCallBack from "./Component/UseCallBack";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Service from "./Router/Service";
import Contact from "./Router/Contact";
import WebDev from "./Router/WebDev";
import AppDev from "./Router/AppDev";
import BlogDetailes from "./Component/BlogDetailes";
// import UseCallBack from "./Component/UseCallBack";

export const Pass = createContext();
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

  const [color, setColor] = useState("light");
  const data = { name: "react" };
  console.log(color);

  const display = false;

  return (
    <>
      {display && (
        <div>
          <UseCallBack />
          <ReducerHookForm />
          <UseReducerHook />
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <Pass.Provider value={{ color, setColor, data }}>
              <ContextForm />
            </Pass.Provider>
          </div>
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            App component--{name}
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
          <UseRefHook />
          <UseEffectAPI />
          <StopWatch />
          <Timer />
          <UseEffectHook />
          <RegFromCondition />
          <RegForm />
          <Feild />
          <DarkMode />
          <UseStateHook />
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
        </div>
      )}
      <div>
        <BrowserRouter>
          <div className="header">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="">Service</Link>
            <Link to="/Contact">Contact</Link>
          </div>

          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/About" element={<About />}>
              <Route path="WebDev" element={<WebDev />} />
              <Route path="AppDev" element={<AppDev />} />
            </Route>
            <Route path="" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetailes/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

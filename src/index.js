import React from "react";
import ReactDOM from "react-dom/client";
import pie, { doublePi, triplePi } from "./math";
import * as pi from "./mathSecond";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePie()}</li>
    <li>{triplePi()}</li>
    <li>{pie}</li>
  </ul>
);

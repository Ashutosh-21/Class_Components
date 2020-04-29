import React from "react";
import "./styles.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";

export default function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

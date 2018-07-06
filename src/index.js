import React from "react";
import ReactDOM from "react-dom";
import FilterInput from "./FilterInput";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <FilterInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

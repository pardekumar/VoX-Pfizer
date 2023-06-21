import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/common/Header";
import Response from "./components/Response";

function App() {
  return (
    <div className="App">
      <Header>
        <Response />
      </Header>
    </div>
  );
}

export default App;

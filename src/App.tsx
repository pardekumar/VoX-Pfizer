import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/common/Header";
import Response from "./components/Response";
import SettingsPopup from "./components/common/settings/Settings";

function App() {
  return (
    <div className="App">
      <Header>
        <Response />
        <SettingsPopup />
      </Header>
    </div>
  );
}

export default App;

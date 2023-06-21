import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/common/Header";
import Response from "./components/Response";
import { UserChatProvider } from "./UserChatContext/UserChatProvider";

function App() {
  return (
    <UserChatProvider>
      <div className="App">
        <Header>
          <Response />
        </Header>
      </div>
    </UserChatProvider>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/common/Header";
import Response from "./components/Response";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserChatProvider } from "./UserChatContext/UserChatProvider";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      textTransform: 'none',
    },
  },
});
function App() {
  return (
    <UserChatProvider>
       <ThemeProvider theme={theme}>
      <div className="App">
        <Header>
          <Response />
        </Header>
      </div>
      </ThemeProvider>
    </UserChatProvider>
  );
}

export default App;

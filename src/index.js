import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./styles/global/global.styled";
import Theme from './styles/themes/theme.styled';

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
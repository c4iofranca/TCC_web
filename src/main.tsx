import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./theme/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

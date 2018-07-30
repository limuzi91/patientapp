import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./App";
import "./index.css";
import "./styles/styles.scss";
import "./assets/icon/web-fonts-with-css/css/fontawesome-all.min.css";

import ScrollToTop from "./utils/ScrollToTop";

const app = (
  <MuiThemeProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));

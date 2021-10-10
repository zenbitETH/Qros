import React from "react";
import ReactDOM from "react-dom";

import { MoralisProvider } from "react-moralis";
import "./styles/index.css";
import "./styles/cards.scss";
import "./styles/profile.scss";
import App from "./App";



ReactDOM.render(
  
  <MoralisProvider appId="TOYUgAQy6p6Sx3uKprDKcRRjU7AXF7DFxdSNlR2y" serverUrl="https://2tmlqxwkknpp.moralishost.com:2053/server">
    <App />
  </MoralisProvider>,

  document.getElementById("root"),
);


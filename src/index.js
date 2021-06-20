import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactPixel from "react-facebook-pixel";
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: true, // enable logs
};

ReactPixel.init("111111111111111", undefined, options);

ReactPixel.pageView();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

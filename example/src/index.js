import React from "react";
import ReactDOM from "react-dom";
import firebaseTracker, {
  firebaseParameterConfig,
} from "./tracker_modules/firebase";
import amplitudeTracker, {
  amplitudeParameterConfig,
} from "./tracker_modules/amplitude";
import { setTrackerProviderFeeder } from "react-component-tracker";
import "./index.css";
import App from "./App";

setTrackerProviderFeeder([
  { tracker: firebaseTracker, parameter: firebaseParameterConfig },
  { tracker: amplitudeTracker, parameter: amplitudeParameterConfig },
]);
ReactDOM.render(<App />, document.getElementById("root"));

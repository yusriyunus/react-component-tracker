import React, { Component } from "react";

import ExampleComponent from "react-component-tracker";
import Tracker from "./Tracker";

export default class App extends Component {
  render() {
    const dataFeeder = {
      eventName: "click_action",
      trigger: "test",
      action: "test",
      data: "test",
      context: "test",
      element: "test",
      // url: "test",
      amplitude: "amplitudes"
    };
    return (
      <Tracker dataFeeder={dataFeeder}>
        <ExampleComponent text="Modern React component module" />
      </Tracker>
    );
  }
}

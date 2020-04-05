import React, { Component } from "react";
import Tracker from "react-component-tracker";

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
      amplitude: "amplitudes",
    };
    return (
      <Tracker dataFeeder={dataFeeder}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}
        >
          <h1
            style={{
              cursor: "pointer",
              margin: "auto",
            }}
          >
            CLICK THIS TO TRIGGER ACTION LOGGER
          </h1>
        </div>
      </Tracker>
    );
  }
}

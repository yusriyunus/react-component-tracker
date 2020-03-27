import React from "react";
import firebaseTracker, { parameterConfig } from "./tracker_modules/firebase";

function generateParameterBaseOnDatafeeder(
  dataFeeder,
  parameter,
  combinedParameter
) {
  const validParameter = parameter.reduce((argsToParse, arg) => {
    Object.keys(dataFeeder).forEach(list => {
      if (arg[list]) {
        argsToParse[list] = dataFeeder[list];
      }
    });
    return argsToParse;
  }, {});
  return Object.assign(combinedParameter, validParameter);
}

function execTrackerBaseOnDataFeeder(trackerFunc) {
  return dataFeeder => {
    const parameterToParse = parameterConfig.reduce(
      (prev, cur) => generateParameterBaseOnDatafeeder(dataFeeder, cur, prev),
      {}
    );
    return trackerFunc(parameterToParse);
  };
}

function onClickTracker({
  dataFeeder = { eventName: "click_action" },
  trackerProvider = [firebaseTracker]
}) {
  return trackerProvider.reduce(
    (prev, cur) => prev(cur)(dataFeeder),
    execTrackerBaseOnDataFeeder
  );
}

function Tracker({ children, dataFeeder, trackerProvider }) {
  return (
    <div onClick={() => onClickTracker({ dataFeeder, trackerProvider })}>
      {children}
    </div>
  );
}

export default Tracker;

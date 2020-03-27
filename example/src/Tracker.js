import React from "react";
import firebaseTracker, {
  firebaseParameterConfig
} from "./tracker_modules/firebase";

function generateParameterBaseOnDatafeeder(
  dataFeeder,
  parameterKey,
  combinedParameter,
  parameterConfig
) {
  const validParameter = Object.keys(dataFeeder).reduce((argsToParse, list) => {
    if (parameterConfig[list]) {
      argsToParse[list] = dataFeeder[list];
    } else if (parameterConfig[parameterKey][list]) {
      const storage = argsToParse[parameterKey]
        ? argsToParse[parameterKey]
        : {};
      argsToParse[parameterKey] = Object.assign(storage, {
        [list]: dataFeeder[list]
      });
    }
    return argsToParse;
  }, {});
  return Object.assign(combinedParameter, validParameter);
}

function execTrackerBaseOnDataFeeder(parameterConfig) {
  return trackerFunc => {
    return dataFeeder => {
      const parameterToParse = Object.keys(parameterConfig).reduce(
        (combinedParameter, parameterKey) =>
          generateParameterBaseOnDatafeeder(
            dataFeeder,
            parameterKey,
            combinedParameter,
            parameterConfig
          ),
        {}
      );
      return trackerFunc(parameterToParse);
    };
  };
}

function onClickTracker({
  dataFeeder = { eventName: "click_action" },
  trackerProvider = [firebaseTracker(firebaseParameterConfig)]
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

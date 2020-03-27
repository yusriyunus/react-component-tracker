import React from "react";
import firebaseTracker, {
  firebaseParameterConfig
} from "./tracker_modules/firebase";
import amplitudeTracker, {
  amplitudeParameterConfig
} from "./tracker_modules/amplitude";

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

function execTrackerBaseOnDataFeeder(trackerFunc, parameterConfig, dataFeeder) {
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
}

function onClickTracker({
  dataFeeder = { eventName: "click_action" },
  trackerProvider = [
    { tracker: firebaseTracker, parameter: firebaseParameterConfig },
    { tracker: amplitudeTracker, parameter: amplitudeParameterConfig }
  ]
}) {
  trackerProvider.forEach(({ tracker, parameter }) =>
    execTrackerBaseOnDataFeeder(tracker, parameter, dataFeeder)
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

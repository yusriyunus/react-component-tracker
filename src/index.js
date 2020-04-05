import React from "react";
import firebaseTracker, {
  firebaseParameterConfig
} from "./tracker_modules/firebase";
import amplitudeTracker, {
  amplitudeParameterConfig
} from "./tracker_modules/amplitude";

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

function generateValidParameter(dataFeeder, parameterConfig, parameterKey) {
  return Object.keys(dataFeeder).reduce((argsToParse, list) => {
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
}

function generateParameterBaseOnDatafeeder({ dataFeeder, parameterConfig }) {
  return Object.keys(parameterConfig).reduce(
    (combinedParameter, parameterKey) => {
      const validParameter = generateValidParameter(
        dataFeeder,
        parameterConfig,
        parameterKey
      );

      return Object.assign(combinedParameter, validParameter);
    },
    {}
  );
}

function onClickTracker({
  dataFeeder = { eventName: "click_action" },
  trackerProvider = [
    { tracker: firebaseTracker, parameter: firebaseParameterConfig },
    { tracker: amplitudeTracker, parameter: amplitudeParameterConfig }
  ]
}) {
  trackerProvider.forEach(
    ({ tracker: execTrackerFunc, parameter: parameterConfig }) =>
      compose(
        execTrackerFunc,
        generateParameterBaseOnDatafeeder
      )({ dataFeeder, parameterConfig })
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

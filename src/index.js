import React from "react";
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
let trackerProviderList = [];

function setTrackerProviderFeeder(trackerList = []) {
  return trackerList.reduce((storage, { tracker, parameter }) => {
    if (tracker && parameter) storage.push({ tracker, parameter });
    return storage;
  }, trackerProviderList);
}

function generateValidParameter(dataFeeder, parameterConfig, parameterKey) {
  return Object.keys(dataFeeder).reduce((argsToParse, list) => {
    if (parameterConfig[list]) {
      argsToParse[list] = dataFeeder[list];
    } else if (parameterConfig[parameterKey][list]) {
      const storage = argsToParse[parameterKey]
        ? argsToParse[parameterKey]
        : {};
      argsToParse[parameterKey] = Object.assign(storage, {
        [list]: dataFeeder[list],
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
  trackerProvider = trackerProviderList,
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

export { setTrackerProviderFeeder };
export default Tracker;

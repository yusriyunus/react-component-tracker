import parameterConfig from "./config";

const eventLogger = ({ eventName, eventParams }) => {
  console.log(
    `Firebase track event with parameter ${eventName},${JSON.stringify({
      eventParams
    })}`
  );
};

// const parameterConfig = [eventName, eventParams];
export { parameterConfig };
export default eventLogger;

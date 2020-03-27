import { eventName, eventParams } from "./config";

const eventLogger = ({ eventName, eventParams }) =>
  console.log(
    `Firebase track event with parameter ${eventName},${eventParams}`
  );

const parameterConfig = [eventName, eventParams];

export { parameterConfig };
export default eventLogger;

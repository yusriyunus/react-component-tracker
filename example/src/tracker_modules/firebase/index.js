import { eventName, eventParams } from "./config";

const eventLogger = ({
  eventName,
  trigger,
  action,
  data,
  context,
  element,
  url
}) => {
  const eventParamsToParse = { trigger, action, data, context, element, url };
  console.log(
    `Firebase track event with parameter ${eventName},${JSON.stringify({
      eventParams: eventParamsToParse
    })}`
  );
};

const parameterConfig = [eventName, eventParams];

export { parameterConfig };
export default eventLogger;

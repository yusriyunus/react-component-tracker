import amplitudeParameterConfig from "./config";

const eventLogger = ({ eventData }) => {
  console.log(
    `Amplitude track event with parameter ${JSON.stringify({
      eventData
    })}`
  );
};

export { amplitudeParameterConfig };
export default eventLogger;

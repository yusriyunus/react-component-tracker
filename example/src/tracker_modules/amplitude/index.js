const amplitudeParameterConfig = {
  eventData: {
    amplitude: "test",
  },
};
const eventLogger = ({ eventData }) => {
  console.log(
    `Amplitude track event with parameter ${JSON.stringify({
      eventData,
    })}`
  );
};

export { amplitudeParameterConfig };
export default eventLogger;

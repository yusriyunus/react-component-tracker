const firebaseParameterConfig = {
  eventName: "test",
  eventParams: {
    trigger: "test",
    action: "test",
    data: "test",
    context: "test",
    element: "test",
    url: "test",
  },
};
const eventLogger = ({ eventName, eventParams }) => {
  console.log(
    `Firebase track event with parameter ${eventName},${JSON.stringify({
      eventParams,
    })}`
  );
};

export { firebaseParameterConfig };
export default eventLogger;

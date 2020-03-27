import firebaseParameterConfig from "./config";

const eventLogger = ({ eventName, eventParams }) => {
  console.log(
    `Firebase track event with parameter ${eventName},${JSON.stringify({
      eventParams
    })}`
  );
};

export { firebaseParameterConfig };
export default eventLogger;

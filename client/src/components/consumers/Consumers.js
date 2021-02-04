import React, { Fragment, useContext } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";
import ConsumerItem from "./ConsumerItem";
const Consumers = () => {
  //having access data that's in consumerContext
  const consumerContext = useContext(ConsumerContext);

  const { consumers, filtered } = consumerContext;

  if (consumers.length === 0) {
    return <h3>Please include a consumer</h3>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((consumer) => (
            <ConsumerItem key={consumer.id} consumer={consumer} />
          ))
        : consumers.map((consumer) => (
            <ConsumerItem key={consumer.id} consumer={consumer} />
          ))}
    </Fragment>
  );
};

export default Consumers;

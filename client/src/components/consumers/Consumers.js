import React, { Fragment, useContext } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";
import ConsumerItem from "./ConsumerItem";
const Consumers = () => {
  //having access data that's in consumerContext
  const consumerContext = useContext(ConsumerContext);

  const { consumers } = consumerContext;
  return (
    <Fragment>
      {consumers.map((consumer) => (
        <ConsumerItem key={consumer.id} consumer={consumer} />
      ))}
    </Fragment>
  );
};

export default Consumers;

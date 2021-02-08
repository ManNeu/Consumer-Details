import React, { Fragment, useContext } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";
import ConsumerItem from "./ConsumerItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Consumers = () => {
  //having access data that's in consumerContext
  const consumerContext = useContext(ConsumerContext);

  const { consumers, filtered } = consumerContext;

  if (consumers.length === 0) {
    return <h3>Please include a consumer</h3>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((consumer) => (
              <CSSTransition key={consumer._id} timeout={500} className="item">
                <ConsumerItem consumer={consumer} />
              </CSSTransition>
            ))
          : consumers.map((consumer) => (
              <CSSTransition key={consumer._id} timeout={500} className="item">
                <ConsumerItem consumer={consumer} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Consumers;

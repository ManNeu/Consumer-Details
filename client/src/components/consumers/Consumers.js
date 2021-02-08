import React, { Fragment, useContext, useEffect } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";
import ConsumerItem from "./ConsumerItem";
import Spinner from "../layout/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Consumers = () => {
  //having access data that's in consumerContext
  const consumerContext = useContext(ConsumerContext);

  const { consumers, filtered, getConsumers, loading } = consumerContext;

  useEffect(() => {
    getConsumers();
    // eslint-disable-next-line
  }, []);

  if (consumers !== null && consumers.length === 0 && !loading) {
    return <h3>Please include a consumer</h3>;
  }
  return (
    <Fragment>
      {consumers !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((consumer) => (
                <CSSTransition
                  key={consumer._id}
                  timeout={500}
                  className="item"
                >
                  <ConsumerItem consumer={consumer} />
                </CSSTransition>
              ))
            : consumers.map((consumer) => (
                <CSSTransition
                  key={consumer._id}
                  timeout={500}
                  className="item"
                >
                  <ConsumerItem consumer={consumer} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Consumers;

import React, { useContext } from "react";
import PropTypes from "prop-types";
import ConsumerContext from "../../context/consumer/consumerContext";

// import { set } from "mongoose";
// import { CLEAR_CURRENT } from "../../context/types";

const ConsumerItem = ({ consumer }) => {
  const consumerContext = useContext(ConsumerContext);
  const { deleteConsumer, setCurrent, clearCurrent } = consumerContext;

  const {
    _id,
    first_name,
    last_name,
    email,
    phone,
    address,
    symptoms,
    travel_history,
    type,
  } = consumer;

  const onDelete = () => {
    deleteConsumer(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        Name: {first_name + " " + last_name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "staff" ? "badge-success" : "badge-primary")
          }
        >
          {" "}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {" "}
        {email && (
          <li>
            <i className="fas fa-envelope-open">{" email:"}</i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone">{"Phone: "}</i>
            {phone}
          </li>
        )}
        {address && (
          <li>
            <i className="fas fa-map-marked">{"Address: "}</i>
            {address}
          </li>
        )}
        {symptoms && (
          <li>
            <i className="fas fa-head-side-cough">{"Disease_symptoms: "}</i>
            {symptoms}
          </li>
        )}
        {travel_history && (
          <li>
            <i className="fas fa-plane-departure">{"Travel_history: "}</i>
            {travel_history}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(consumer)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
ConsumerItem.propTypes = {
  consumer: PropTypes.object.isRequired,
};
export default ConsumerItem;

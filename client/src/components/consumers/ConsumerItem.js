import React from "react";

const ConsumerItem = ({ consumer }) => {
  const {
    id,
    first_name,
    last_name,
    email,
    phone,
    address,
    symptoms,
    travel_history,
    type,
  } = consumer;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        Name: {first_name + " " + last_name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge" + (type === "staff" ? "badge-success" : "badge-primary")
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
    </div>
  );
};

export default ConsumerItem;

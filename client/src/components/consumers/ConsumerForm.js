import React, { useState, useContext, useEffect } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";
const ConsumerForm = () => {
  const consumerContext = useContext(ConsumerContext);

  const { addConsumer, current } = consumerContext;

  useEffect(() => {
    if (current != null) {
      setConsumer(current);
    } else {
      setConsumer({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        symptoms: "",
        tavel_history: "",
        type: "Staff",
      });
    }
  });

  const [consumer, setConsumer] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    symptoms: "",
    tavel_history: "",
    type: "Staff",
  });
  const {
    first_name,
    last_name,
    email,
    phone,
    address,
    symptoms,
    travel_history,
    type,
  } = consumer;
  const onChange = (e) =>
    setConsumer({ ...consumer, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    consumerContext.addConsumer(consumer);
    setConsumer({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      symptoms: "",
      tavel_history: "",
      type: "Staff",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Consumer</h2>
      <input
        type="text"
        placeholder="First Name"
        name="first_name"
        value={first_name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="last_name"
        value={last_name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={address}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Disease-symptoms"
        name="symptoms"
        value={symptoms}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Travel_history"
        name="travel_history"
        value={travel_history}
        onChange={onChange}
      />
      <h6>Person Type</h6>
      <input
        type="radio"
        name="type"
        value="Staff"
        checked={type === "Staff"}
        onChange={onChange}
      />{" "}
      Staff{" "}
      <input
        type="radio"
        name="type"
        value="Visitor"
        checked={type === "Visitor"}
        onChange={onChange}
      />
      Visitor{" "}
      <div>
        <input
          type="submit"
          value="Add Consumer"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ConsumerForm;

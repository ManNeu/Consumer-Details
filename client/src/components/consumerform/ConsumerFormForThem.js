import React, { useState } from "react";

const ConsumerFormForThem = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    symptoms: "",
    travel_history: "",
    type: "Visitor",
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
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit my details");
  };

  return (
    <div className="formContainer">
      <h1>
        Consumer <span className="textPrimary">Details Form</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" value={phone} onChange={onChange} />
        </div>
        <div className="formGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="symptoms">Disease Symptoms</label>
          <input
            type="text"
            name="symptoms"
            value={symptoms}
            placeholder="fever, cough ..."
            onChange={onChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="travel_history">Travel History </label>
          <input
            type="text"
            name="travel_history"
            value={travel_history}
            onChange={onChange}
            placeholder="any places visited last 14 days"
          />
        </div>
        <h6>Person Type</h6>
        <input
          type="radio"
          name="type"
          value="staff"
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
        <input
          type="submit"
          value="My Details"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default ConsumerFormForThem;

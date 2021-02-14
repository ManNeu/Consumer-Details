import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import backgroundImage from "../images/backgroundImage.jpg";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exist") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    store_name: "",
    store_location: "",
    email: "",
    password: "",
    password2: "",
  });

  const { store_name, store_location, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Confirm password should be the same as password", "danger");
    } else {
      register({
        store_name,
        store_location,
        email,
        password,
      });
    }
  };

  return (
    <div style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
      <div className="formContainer">
        <h1>
          Account <span className="textPrimary">Register</span>
        </h1>

        <form onSubmit={onSubmit}>
          <div className="formGroup">
            <label htmlFor="store_name">Store Name</label>
            <input
              type="text"
              name="store_name"
              value={store_name}
              onChange={onChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="store_location">Store location</label>
            <input
              type="text"
              name="store_location"
              value={store_location}
              onChange={onChange}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="8"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="8"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

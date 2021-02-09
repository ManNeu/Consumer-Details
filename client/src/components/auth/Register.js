import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    // if (
    //   first_name === "" ||
    //   last_name === "" ||
    //   email === "" ||
    //   password === ""
    // ) {
    //   setAlert("All fields are required", "danger");
    if (password !== password2) {
      setAlert("Confirm password should be the same as password", "danger");
    } else {
      register({
        first_name,
        last_name,
        email,
        password,
      });
    }
  };

  return (
    <div className="formContainer">
      <h1>
        Account <span className="textPrimary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={last_name}
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
  );
};

export default Register;

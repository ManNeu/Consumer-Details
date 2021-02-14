import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import greyBackground from "../images/greyBackground.jpg";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Both email and password fields are required");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div style={{ backgroundImage: "url(" + greyBackground + ")" }}>
      <div className="formContainer">
        <h1>
          Login <span className="textPrimary">User</span>
        </h1>
        <form onSubmit={onSubmit}>
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
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

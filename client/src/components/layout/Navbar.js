import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ConsumerContext from "../../context/consumer/consumerContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const consumerContext = useContext(ConsumerContext);

  const { clearConsumers } = consumerContext;

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
    clearConsumers();
  };

  const authLinks = (
    <Fragment>
      <h3>
        {" "}
        Welcome to: {user && user.store_name + " @ " + user.store_location}{" "}
      </h3>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register" className="Navlink">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="Navlink">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: " Consumer Details",
  icon: "fas fa-info-circle",
};
export default Navbar;

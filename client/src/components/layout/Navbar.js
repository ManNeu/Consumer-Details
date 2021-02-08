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
      <li>Hello {user && user.first_name + " " + user.last_name}</li>
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
        <Link to="/register" className="navLink">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="navLink">
          Login
        </Link>
      </li>
      {/* <li>
          <Link to="/consumerform" className="navLink">
            Consumer Form
          </Link>
        </li> */}
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        {/* <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navLink">
            About
          </Link>
        </li> */}
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Consumer Details",
  icon: "fas fa-id-card-alt",
};
export default Navbar;

import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ConsumerContext from "../../context/consumer/consumerContext";
import blueWaterMark from "../images/blueWaterMarks.jpg";

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
      {/* <li>Hello {user && user.first_name + " " + user.last_name}</li> */}
      <li>Welcome to {user && user.store_name + "\n" + user.store_location}</li>
      {/* <br /> */}

      {/* <li> {user && user.store_location}</li> */}
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
      {/* <li>
          <Link to="/consumerform" className="navLink">
            Consumer Form
          </Link>
        </li> */}
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      {/* <div style={{ backgroundImage: "url(" + blueWaterMark + ")" }}> */}
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
    // </div>
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

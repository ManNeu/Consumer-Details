import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navLink">
            About
          </Link>
        </li>
        <li>
          <Link to="/register" className="navLink">
            Register
          </Link>
        </li>
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

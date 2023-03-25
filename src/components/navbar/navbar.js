import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarWapper">
      <div className="nav-left">
        <img src={logo} />
      </div>
      <div className="nav-right">
        <Link to="/home" style={{ cursor: "pointer" }}>
          Home
        </Link>
        <Link to="/about" style={{ cursor: "pointer" }}>
          About me
        </Link>
        <Link to="/product" style={{ cursor: "pointer" }}>
          Products
        </Link>
        <Link to="/contact" style={{ cursor: "pointer" }}>
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

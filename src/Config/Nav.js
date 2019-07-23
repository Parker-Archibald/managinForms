import React from "react";
import "../Styles/Style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/Reg">Register </Link>
      </div>
       <div>
        <Link to="/auth">Login </Link>
      </div>
      <div>
        <Link to="/delete">Unregister</Link>
      </div>
    </nav>
  );
};
export default Nav;

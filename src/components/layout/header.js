import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-400 h-32">
      <div className="w-96 flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/market">Market</Link>
      </div>
    </div>
  );
};

export default Header;

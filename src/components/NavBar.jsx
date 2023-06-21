import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Link to="/">
      <div className="navbar flex text-center justify-center">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="text-purple-700">Search</span>
        </h1>
      </div>
    </Link>
  );
};
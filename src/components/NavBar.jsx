import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Link to="/">
      <div className="navbar flex text-center justify-center">
        <i
          className="fas fa-brands fa-bitcoin"
          style={{ color: "var(--text-primary)" }}
        ></i>
        <h1>
          Cherry <span className="">Coins</span>
        </h1>
      </div>
    </Link>
  );
};

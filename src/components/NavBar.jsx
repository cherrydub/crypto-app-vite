import React from "react";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Link to="/">
      <div className="navbar flex text-center justify-center pt-3">
        <i
          className="fas fa-brands fa-bitcoin btc-logo"
          style={{ color: "var(--text-secondary)" }}
        ></i>
        itcoin will set you free
      </div>
    </Link>
  );
};

import React from "react";

import { Link } from "react-router-dom";
import { Toggle } from "./Toggle";

export const NavBar = ({ switchTheme, theme, setDisplayAmount }) => {
  return (
    <div className="flex fixed top-0 left-0 right-0 navbar">
      <div className="flex-grow text-left"></div>
      <div className="flex-grow text-center">
        <Link to="/">
          <div className="flex text-center justify-center font-bold">
            <i
              className="fas fa-brands fa-bitcoin btc-logo"
              // style={{ color: "var(--text-secondary)", hover: "var(--link)" }}
            ></i>
            itcoin will set you free
          </div>
        </Link>
      </div>
      <div className="flex-grow text-right">
        <Toggle
          switchTheme={switchTheme}
          theme={theme}
          setDisplayAmount={setDisplayAmount}
        />
      </div>
    </div>
  );
};

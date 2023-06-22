import React from "react";

export const Toggle = ({ switchTheme, theme, setDisplayAmount }) => {
  return (
    <div className="flex">
      <div className="flex-grow text-left">
        {/* <button className="m-x-2" onClick={() => setDisplayAmount(10)}>
          10
        </button>
        <button onClick={() => setDisplayAmount(25)}>25</button>
        <button onClick={() => setDisplayAmount(100)}>100</button> */}
      </div>
      <div className=" border-blue-500 flex-grow text-center"></div>

      <div className="theme-toggle flex-growtext-center">
        {/* <h2>{theme === "dark" ? "Dark" : "Light"} Theme</h2> */}
        {/* <i class="fa-regular fa-sun" style="color: #000000;"></i> */}

        {theme === "dark" ? (
          <span>
            <i className="fas fa-regular fa-moon" style={{ color: "#fff" }}></i>
            <i
              onClick={switchTheme}
              className="fas fa-light fa-toggle-off"
              style={{ color: "#fff" }}
            ></i>
            <i className="fas fa-solid fa-sun" style={{ color: "#fff" }}></i>
          </span>
        ) : (
          <span>
            <i className="fas fa-regular fa-moon" style={{ color: "#000" }}></i>

            <i
              onClick={switchTheme}
              className="fas fa-light fa-toggle-on"
              style={{ color: "#000" }}
            ></i>
            <i className="fas fa-solid fa-sun" style={{ color: "#000" }}></i>
          </span>
        )}
        {/* {them === 'dark'}
        <i className="fa-solid fa-sun" style={{ color: "#000" }}></i> */}
      </div>
    </div>
  );
};

// <i class="fa-light fa-toggle-on fa-xs" style="color: #000000;"></i>

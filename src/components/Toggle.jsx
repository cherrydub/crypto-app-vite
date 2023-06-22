import React from "react";

export const Toggle = ({ switchTheme, theme, setDisplayAmount }) => {
  return (
    <div className="flex border-2">
      <div className="border-2 border-green-500 flex-grow">1</div>
      <div className="border-2 border-blue-500 flex-grow">
        <button onClick={() => setDisplayAmount(10)}>10 coins</button>
        <button onClick={() => setDisplayAmount(25)}>25 coins</button>
        <button onClick={() => setDisplayAmount(100)}>100 coins</button>
      </div>

      <div className="theme-toggle flex-grow border-2 border-pink-600">
        <h2>{theme === "dark" ? "Dark" : "Light"} Theme</h2>

        {theme === "dark" ? (
          <i onClick={switchTheme} class="fas fa-toggle-on"></i>
        ) : (
          <i onClick={switchTheme} class="fas fa-toggle-off"></i>
        )}
      </div>
    </div>
  );
};

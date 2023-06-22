import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Coins } from "./components/Coins";
import { NavBar } from "./components/NavBar";
import { Coin } from "./routes/Coin";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./components/Toggle";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [displayAmount, setDisplayAmount] = useState(10);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${displayAmount}&page=1&sparkline=false&locale=en`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log("data:", res.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [displayAmount]);

  return (
    <div className="app" id="top" data-theme={theme}>
      <NavBar />
      <Toggle
        switchTheme={switchTheme}
        theme={theme}
        setDisplayAmount={setDisplayAmount}
      />
      <Routes>
        <Route
          path="/"
          element={<Coins setDisplayAmount={setDisplayAmount} coins={coins} />}
        />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

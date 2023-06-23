import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Coins } from "./components/Coins";
import { NavBar } from "./components/NavBar";
import { Coin } from "./routes/Coin";
import useLocalStorage from "use-local-storage";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const [displayAmount, setDisplayAmount] = useState(10);
  const [currency, setCurrency] = useState("usd");

  const currencySymbol = {
    usd: "$",
    gbp: "£",
    eur: "€",
  };

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${displayAmount}&page=1&sparkline=false&locale=en`;

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
  }, [url]);

  return (
    <div className="app" id="top" data-theme={theme}>
      <NavBar
        switchTheme={switchTheme}
        theme={theme}
        setDisplayAmount={setDisplayAmount}
      />
      {/* <Toggle
        switchTheme={switchTheme}
        theme={theme}
        setDisplayAmount={setDisplayAmount}
      /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Coins
              setDisplayAmount={setDisplayAmount}
              coins={coins}
              currency={currency}
              setCurrency={setCurrency}
            />
          }
        />
        <Route
          path="/coin"
          element={<Coin currency={currency} setCurrency={setCurrency} />}
        >
          <Route
            path=":coinId"
            element={<Coin currency={currency} setCurrency={setCurrency} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

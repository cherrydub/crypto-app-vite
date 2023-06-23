import React from "react";
import { CoinItem } from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import { Coin } from "../routes/Coin";

export const Coins = ({ coins, setDisplayAmount, currency, setCurrency }) => {
  return (
    <>
      <div className="text-right px-4 pt-10">
        {currency === "usd" ? (
          <button
            className="currency-choice"
            onClick={() => setCurrency("usd")}
          >
            usd
          </button>
        ) : (
          <button onClick={() => setCurrency("usd")}>usd</button>
        )}
        {currency === "gbp" ? (
          <button
            className="currency-choice"
            onClick={() => setCurrency("gbp")}
          >
            gbp
          </button>
        ) : (
          <button onClick={() => setCurrency("gbp")}>gbp</button>
        )}
        {currency === "eur" ? (
          <button
            className="currency-choice"
            onClick={() => setCurrency("eur")}
          >
            eur
          </button>
        ) : (
          <button onClick={() => setCurrency("eur")}>eur</button>
        )}
        {"   "}
        <button className="" onClick={() => setDisplayAmount(10)}>
          10
        </button>
        <button onClick={() => setDisplayAmount(25)}>25</button>
        <button onClick={() => setDisplayAmount(100)}>100</button>
      </div>

      <div className="container">
        <div className="heading">
          <p className="roboto-bold">#</p>
          <p className="coin-name roboto-bold">Coin</p>
          <p className="roboto-bold">Price</p>
          <p className="roboto-bold">24hr</p>
          <p className="hide-mobile roboto-bold">Volume</p>
          <p className="hide-mobile roboto-bold">Mkt Cap</p>
        </div>
        {coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem
                coin={coin}
                currency={currency}
                setCurrency={setCurrency}
              />
            </Link>
          );
        })}
      </div>
      <div className="bottom-0 text-center">...</div>
    </>
  );
};

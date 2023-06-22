import React from "react";
import { CoinItem } from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import { Coin } from "../routes/Coin";

export const Coins = ({ coins, setDisplayAmount, currency, setCurrency }) => {
  return (
    <>
      <div className="text-right px-4 pt-10">
        <button className="" onClick={() => setDisplayAmount(10)}>
          10
        </button>
        <button onClick={() => setDisplayAmount(25)}>25</button>
        <button onClick={() => setDisplayAmount(100)}>100</button>
      </div>

      <div className="container">
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24hr</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
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

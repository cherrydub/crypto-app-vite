import React from "react";
import { CoinItem } from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import { Coin } from "../routes/Coin";

export const Coins = ({ coins }) => {
  return (
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
            <CoinItem coin={coin} />
          </Link>
        );
      })}
    </div>
  );
};

import React from "react";
// import "./Coins.css";

export const CoinItem = ({ coin, currency, setCurrency }) => {
  const currencySymbol = {
    usd: "$",
    gbp: "£",
    eur: "€",
  };
  return (
    <div className="coin-row" title={coin.name}>
      <p className="text-primary">{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img className="" src={coin.image} alt={coin.name} />
        <p className="roboto-bold" style={{ color: "var(--text-primary)" }}>
          {coin.symbol.toUpperCase()}
        </p>
      </div>
      <p className="text-secondary">
        {currencySymbol[currency]}
        {coin.current_price.toLocaleString()}
      </p>

      {coin.price_change_percentage_24h > 0 ? (
        <p className="text-green-500">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="text-red-500">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}

      <p className="hide-mobile text-secondary">
        {currencySymbol[currency]}
        {coin.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile text-secondary">
        {currencySymbol[currency]}
        {coin.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

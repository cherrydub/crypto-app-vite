import React from "react";
// import "./Coins.css";

export const CoinItem = ({ coin }) => {
  return (
    <div className="coin-row" title={coin.name}>
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img className="" src={coin.image} alt={coin.name} />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>

      {coin.price_change_percentage_24h > 0 ? (
        <p className="text-green-500">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      ) : (
        <p className="text-red-500">
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      )}

      <p className="hide-mobile">${coin.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

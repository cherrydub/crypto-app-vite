import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Coin.css";

export const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("usd");

  const currencySymbol = {
    usd: "$",
    gbp: "£",
    eur: "€",
  };

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [currency]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="coin-container pt-12 coin">
      {/* <div className="content">
        <h1>{coin.name}</h1>
      </div> */}
      <div className="content">
        <div className="rank flex">
          <div className="rank-btn">Rank # {coin.market_cap_rank}</div>
          <div className=" flex-grow text-right">
            {currency === "usd" ? (
              <button
                className="bg-black text-white"
                onClick={() => setCurrency("usd")}
              >
                usd
              </button>
            ) : (
              <button onClick={() => setCurrency("usd")}>usd</button>
            )}

            {currency === "gbp" ? (
              <button
                className="bg-black text-white"
                onClick={() => setCurrency("gbp")}
              >
                gbp
              </button>
            ) : (
              <button onClick={() => setCurrency("gbp")}>gbp</button>
            )}

            {currency === "eur" ? (
              <button
                className="bg-black text-white"
                onClick={() => setCurrency("eur")}
              >
                eur
              </button>
            ) : (
              <button onClick={() => setCurrency("eur")}>eur</button>
            )}
          </div>
        </div>

        <div className="info font-bold">
          <div className="coin-heading">
            {coin.image?.small && <img src={coin.image.small} alt="" />}
            <p>{coin.name}</p>
            <p>{coin.symbol.toUpperCase()}</p>
          </div>
          <div className="coin-price">
            <h1>
              {currencySymbol[currency]}
              {coin.market_data?.current_price?.[currency].toLocaleString() ??
                "N/A"}
            </h1>
          </div>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>1hr</th>
              <th>24hr</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {coin.market_data?.price_change_percentage_1h_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_1h_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_1h_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
              {coin.market_data?.price_change_percentage_24h_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_24h_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_24h_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
              {coin.market_data?.price_change_percentage_7d_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_7d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_7d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
              {coin.market_data?.price_change_percentage_14d_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_14d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_14d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
              {coin.market_data?.price_change_percentage_30d_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_30d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_30d_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
              {coin.market_data?.price_change_percentage_1y_in_currency?.[
                currency
              ].toFixed(1) > 0 ? (
                <td className="text-green-500">
                  {coin.market_data?.price_change_percentage_1y_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              ) : (
                <td className="text-red-500">
                  {coin.market_data?.price_change_percentage_1y_in_currency?.[
                    currency
                  ].toFixed(1)}
                  %
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="content">
        <div className="stats">
          <div className="left">
            <div className="row">
              <h4 className="font-bold">24 Hour Low</h4>
              <p>
                {currencySymbol[currency]}
                {coin.market_data?.low_24h?.[currency].toLocaleString() ??
                  "N/A"}
              </p>
            </div>
            <div className="row">
              <h4 className="font-bold">24 Hour High</h4>
              <p>
                {currencySymbol[currency]}
                {coin.market_data?.high_24h?.[currency].toLocaleString() ??
                  "N/A"}
              </p>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <h4 className="font-bold">Market Cap</h4>
              <p>
                {currencySymbol[currency]}
                {coin.market_data?.market_cap?.[currency].toLocaleString() ??
                  "N/A"}
              </p>
            </div>
            <div className="row">
              <h4 className="font-bold">Circulating Supply</h4>
              <p>
                {coin.market_data?.circulating_supply.toLocaleString() ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="about">
          <h3 className="font-bold">About</h3>

          <p
            className="text-secondary"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description?.en ?? "N/A"),
            }}
          ></p>
        </div>
      </div>
      <div className="bottom-0 text-center">...</div>
    </div>
  );
};

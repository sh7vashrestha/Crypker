import React from "react";
import homeStore from "../stores/homeStore";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";
import Footer from "../Components/Footer";

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    if(store.trending.length === 0) store.fetchCoins();
  }, []);


  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Crypto-Search</h2>
          <div className="home-search-input">
            <input type="text" value={store.query} onChange={store.setQuery} />
            {store.searching && <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="28">
              <path fill='currentColor' d="M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-84 31-157t85-127q54-54 127-85t157-31q12 0 21 9t9 21q0 12-9 21t-21 9q-141 0-240.5 99.5T140-480q0 141 99.5 240.5T480-140q141 0 240.5-99.5T820-480q0-12 9-21t21-9q12 0 21 9t9 21q0 84-31 157t-85 127q-54 54-127 85T480-80Z" />
            </svg>}
          </div>
        </div>
      </header>
      <div className="home_cryptos">
        <div className="width">
          <h2>{store.searched?"Results" :"Top Performing Coins"}</h2>

          <div className="home-cryptos-list">
            {store.coins.map((coin) => {
              return <ListItem key={coin.id} coin={coin} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

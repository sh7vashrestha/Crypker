import React from "react";
import homeStore from "../stores/homeStore";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import ListItem from "../Components/ListItem";

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Crypto-Search</h2>
          <input type="text" value={store.query} onChange={store.setQuery} />
        </div>
      </header>
      <div className="home_cryptos">
        <div className="width">
          <h2>Top Performing Coins</h2>
        
        <div className="home-cryptos-list">
        {store.coins.map((coin) => {
          return <ListItem key={coin.id} coin={coin} />;
        })}
        </div>
        </div>
      </div>
    </div>
  );
}

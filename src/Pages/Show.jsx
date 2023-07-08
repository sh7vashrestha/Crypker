import React, { PureComponent } from "react";
import showStore from "../stores/showStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);

    return () =>{
      store.reset()
    }
  }, []);
  return (
    <div>
      <Header back />
      {store.data && <>
      <header className="show-header">
        <img src={store.data.image.large} alt={`${store.data.name}'s Image`} />
        <h2>
          {store.data.name}({store.data.id})
        </h2>
      </header>
      <div className="width">
        <div className="show-graph">
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              data={store.graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                name="Price(USD$)"
                dataKey="price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="width">
          <div className="show-details">
            <h2>Details</h2>
            <div className="show-detail-row">
              <h3>Market Cap Rank</h3>
              <span>{store.data.market_cap_rank}</span>
            </div>
            <div className="show-detail-row">
              <h3>Current Price(USD$)</h3>
              <span>{store.data.market_data.current_price.usd}</span>
            </div>
            <div className="show-detail-row">
              <h3>Highest value in past 24hrs(USD$)</h3>
              <span>{store.data.market_data.high_24h.usd}</span>
            </div>
            <div className="show-detail-row">
              <h3>Lowest value in past 24hrs(USD$)</h3>
              <span>{store.data.market_data.low_24h.usd}</span>
            </div>
            <div className="show-detail-row">
              <h3>Circulating Supply</h3>
              <span>{store.data.market_data.circulating_supply}</span>
            </div>
            <div className="show-detail-row">
              <h3>Total Volume(USD$)</h3>
              <span>{store.data.market_data.total_volume.usd}</span>
            </div>
            <div className="show-detail-row">
              <h3>1year change</h3>
              <span>
                {store.data.market_data.price_change_percentage_1y.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>}
    </div>
  );
}

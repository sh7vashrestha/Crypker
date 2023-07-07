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
} from "recharts";

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);
  }, []);
  if (!store.data) return <></>;
  return (
    <div>
      <header>
        <img src={store.data.image.large} alt={`${store.data.name}'s Image`} />
        <h2>
          {store.data.name}({store.data.id})
        </h2>
      </header>
      <AreaChart
        width={500}
        height={400}
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
      <div>
        <h4>Market Cap Rank</h4>
        <span>{store.data.market_cap_rank}</span>
      </div>
      <div>
        <h4>Current Price(USD$)</h4>
        <span>{store.data.market_data.current_price.usd}</span>
      </div>
      <div>
        <h4>Highest value in past 24hrs(USD$)</h4>
        <span>{store.data.market_data.high_24h.usd}</span>
      </div>
      <div>
        <h4>Lowest value in past 24hrs(USD$)</h4>
        <span>{store.data.market_data.low_24h.usd}</span>
      </div>
      <div>
        <h4>Circulating Supply</h4>
        <span>{store.data.market_data.circulating_supply}</span>
      </div>
      <div>
        <h4>Total Volume(USD$)</h4>
        <span>{store.data.market_data.total_volume.usd}
        </span>
      </div>
      <div>
        <h4>1year change</h4>
        <span>
          {store.data.market_data.price_change_percentage_1y.toFixed(2)}%
        </span>
      </div>

    </div>
  );
}

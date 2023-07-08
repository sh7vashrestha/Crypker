import axios from "axios";
import { create } from "zustand";
import debounce from "../helpers/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  searching: false,
  searched: false,

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    set({ searching: true });
    const { query, trending } = homeStore.getState();
    //yesma getstate().trending and getstate().query agrehunxa
    if (query.length > 2) {
      const r = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const coins = r.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
          priceBtc: coin.priceBtc,
          priceUsd: coin.priceUsd,
        };
      });
      set({ coins: coins, searching: false, searched: true });
      //set({coins: coins}) same ho
    } else {
      set({ searching: false, coins: trending, searched: false });
    }
  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      ),
    ]);
    const btcPrice = btcRes.data.bitcoin.usd;
    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc.toFixed(10),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(10),
      };
    });

    set({ coins, trending: coins });
  },
}));

export default homeStore;

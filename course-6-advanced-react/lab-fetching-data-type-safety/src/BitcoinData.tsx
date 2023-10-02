import { useEffect, useState } from "react";

type bitcoinDataType = {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: Number;
    };
    GBP: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: Number;
    };
    EUR: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: Number;
    };
  };
};

function BitcoinData() {
  // State
  const [coinData, setCoinData] = useState<bitcoinDataType>({
    bpi: {
      EUR: {
        code: "",
        description: "",
        rate: "",
        rate_float: 0,
        symbol: "",
      },
      GBP: { code: "", description: "", rate: "", rate_float: 0, symbol: "" },
      USD: { code: "", description: "", rate: "", rate_float: 0, symbol: "" },
    },
    chartName: "",
    disclaimer: "",
    time: { updated: "", updatedISO: "", updateduk: "" },
  });
  function fetchData() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => setCoinData(data))
      .catch((error) => console.log(error));
  }

  // Only fetch data on first render
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(coinData);
    console.log("length: ", Object.keys(coinData).length);
  }, [coinData]);

  return Object.keys(coinData).length === 0 ? (
    <div>
      <h1>Loading data</h1>
    </div>
  ) : (
    <div>
      <h1>{"USD: $" + coinData["bpi"]["USD"]["rate_float"]}</h1>
      <h2>{"Last Updated: " + coinData["time"]["updated"]}</h2>
    </div>
  );
}

export { BitcoinData };

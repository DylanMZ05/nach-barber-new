import React, { useEffect, useState } from "react";
import axios from "axios";

interface Price {
  id: number;
  corte: string;
  precio: string;
}

const PriceList: React.FC = () => {
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/precios").then((res) => {
      setPrices(res.data);
    });
  }, []);

  return (
    <div className="items-start mt-[25px] grid grid-cols-1 gap-y-3">
      {prices.map(({ id, corte, precio }) => (
        <div key={id} className="flex justify-between w-[90vw] max-w-[400px]">
          <p className="font-semibold text-[24px] ts-sm">{corte}</p>
          <p className="font-semibold text-blue-500 text-[24px] ts-sm">${precio}</p>
        </div>
      ))}
    </div>
  );
};

export default PriceList;
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Price {
    id: number;
    corte: string;
    precio: string;
}

const Prices: React.FC = () => {
    const [prices, setPrices] = useState<Price[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/precios").then((res) => {
            setPrices(res.data);
        });
    }, []);

    return (
        <section id="precios" className="w-screen h-auto flex flex-col items-center justify-center mb-[75px]">
            <div className="w-screen h-auto flex flex-col items-center justify-center text-center">
                <h3 className="text-[36px] md:text-[40px] font-semibold mx-4">LISTA DE PRECIOS</h3>
                <div className="h-1 bg-blue-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className="items-start mt-[25px] grid grid-cols-1 gap-y-3">
                {prices.map(({ id, corte, precio }) => (
                    <div key={id} className="flex justify-between items-center mx-2 w-[90vw] max-w-[450px]">
                        <p className="font-bold text-[22px] md:text-[24px]">{corte}</p>
                        <p className="font-bold text-blue-600 text-[22px] md:text-[24px]">{precio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Prices;
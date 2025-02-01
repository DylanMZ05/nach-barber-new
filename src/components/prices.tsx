import React from "react";

const Prices: React.FC = () => {
    return (
        <section id="precios" className="w-screen h-auto flex flex-col items-center justify-center mb-[75px]">
            <div className="w-screen h-auto flex flex-col items-center justify-center text-center">
                <h3 className="text-[36px] md:text-[40px] font-semibold mx-4">LISTA DE PRECIOS</h3>
                <div className="h-1 bg-blue-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div id="divListaPrecios" className="items-start mt-[25px] grid grid-cols-1 gap-y-3"></div>
        </section>
    );
};

export default Prices;
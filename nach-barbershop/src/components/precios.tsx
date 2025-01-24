import React from "react";

interface Prices {
    corte: string;
    precio: string;
}

const Prices: React.FC<Prices> = ({ corte, precio }) => {
    return (
        <div className='flex justify-between w-[480px]'>
            <p className='font-semibold text-[24px]'>{corte}</p>
            <p className='font-semibold text-red-600 text-[24px]'>{precio}</p>
        </div>
    );
}

export default Prices;
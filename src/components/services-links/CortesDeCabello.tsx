import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const CortesDeCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Cortes/Corte-1.jpeg", alt: "Corte-1" },
        { id: 2, src: "media/Cortes/Corte-2.jpeg", alt: "Corte-2" },
        { id: 3, src: "media/Cortes/Corte-3.jpeg", alt: "Corte-3" },
        { id: 4, src: "media/Cortes/Corte-4.jpeg", alt: "Corte-4" },
        { id: 5, src: "media/Cortes/Corte-5.jpeg", alt: "Corte-5" },
        { id: 6, src: "media/Cortes/Corte-6.jpeg", alt: "Corte-6" },
        { id: 7, src: "media/Cortes/Corte-7.jpeg", alt: "Corte-7" },
        { id: 8, src: "media/Cortes/Corte-8.jpeg", alt: "Corte-8" },
        { id: 9, src: "media/Cortes/Corte-9.jpeg", alt: "Corte-9" },
        { id: 10, src: "media/Cortes/Corte-10.jpeg", alt: "Corte-10" },
        { id: 11, src: "media/Cortes/Corte-11.jpeg", alt: "Corte-11" },
        { id: 12, src: "media/Cortes/corte-12.jpg", alt: "Corte-12" },
    ];

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Cortes de Cabello</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los estilos de cortes de cabello más populares.</p>
            <ServicesComponent cortes={cortes} />
            <div className="mt-25">
                <Services currentPage="CortesDeCabello" />
            </div>
        </section>

    );
};

export default CortesDeCabello;
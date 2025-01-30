import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";


const CortesBarba: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Barbas/barba-1.jpeg", alt: "Barba-1" },
        { id: 2, src: "media/Barbas/barba-2.jpeg", alt: "Barba-2" },
        { id: 3, src: "media/Barbas/barba-3.jpeg", alt: "Barba-3" },
        { id: 4, src: "media/Barbas/barba-4.jpeg", alt: "Barba-4" },
        { id: 5, src: "media/Barbas/barba-5.jpeg", alt: "Barba-5" },
    ]

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Estilos de Barbas</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los Estilos de Barbas más populares.</p>
            <ServicesComponent cortes={cortes} />

            <div className="mt-25">
                <Services currentPage="CortesBarba" />
            </div>
        </section>

    );
};

export default CortesBarba;
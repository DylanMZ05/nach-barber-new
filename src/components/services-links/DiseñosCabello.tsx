import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const DiseñosCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "public/media/Diseños/diseño-1-copia.jpg", alt: "Diseño-1" },
        { id: 2, src: "public/media/Diseños/diseño-2.jpg", alt: "Diseño-2" },
        { id: 3, src: "public/media/Diseños/diseño-3.jpg", alt: "Diseño-3" },
        { id: 4, src: "public/media/Diseños/diseño-4.jpg", alt: "Diseño-4" },
        { id: 5, src: "public/media/Diseños/diseño-5.jpg", alt: "Diseño-5" },
        { id: 6, src: "public/media/Diseños/diseño-6.jpg", alt: "Diseño-6" },
        { id: 7, src: "public/media/Diseños/diseño-7.jpg", alt: "Diseño-7" },
        { id: 8, src: "public/media/Diseños/diseño-9.jpg", alt: "Diseño-8" },
        { id: 9, src: "public/media/Diseños/diseño-10.jpg", alt: "Diseño-9" },
        { id: 10, src: "public/media/Diseños/diseño-11.jpg", alt: "Diseño-10" },
        { id: 11, src: "public/media/Diseños/diseño-12.jpg", alt: "Diseño-11" },
        { id: 12, src: "public/media/Diseños/diseño-13.jpg", alt: "Diseño-12" },
        { id: 13, src: "public/media/Diseños/diseño-14.jpg", alt: "Diseño-13" },
    ];

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Diseños para Cabello</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los estilos de Diseños para Cabello más populares.</p>
            <ServicesComponent cortes={cortes} />

            <div className="mt-25">
                <Services currentPage="DiseñosCabello" />
            </div>
        </section>

    );
};

export default DiseñosCabello;
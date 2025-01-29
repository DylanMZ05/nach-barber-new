import React from "react";
import Services from '../services';

const DiseñosCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "public/media/Diseños/diseño-1-copia.jpg", alt: "Diseño-1" },
        { id: 2, src: "public/media/Diseños/diseño-2.jpg", alt: "Diseño-2" },
        { id: 3, src: "public/media/Diseños/diseño-3.jpg", alt: "Diseño-3" },
        { id: 4, src: "public/media/Diseños/diseño-4.jpg", alt: "Diseño-4" },
        { id: 5, src: "public/media/Diseños/diseño-5.jpg", alt: "Diseño-5" },
        { id: 6, src: "public/media/Diseños/diseño-6.jpg", alt: "Diseño-6" },
        { id: 7, src: "public/media/Diseños/diseño-7.jpg", alt: "Diseño-7" },
        { id: 5, src: "public/media/Diseños/diseño-9.jpg", alt: "Diseño-8" },
        { id: 6, src: "public/media/Diseños/diseño-10.jpg", alt: "Diseño-9" },
        { id: 7, src: "public/media/Diseños/diseño-11.jpg", alt: "Diseño-10" },
        { id: 6, src: "public/media/Diseños/diseño-12.jpg", alt: "Diseño-11" },
        { id: 7, src: "public/media/Diseños/diseño-13.jpg", alt: "Diseño-12" },
        { id: 6, src: "public/media/Diseños/diseño-14.jpg", alt: "Diseño-13" },
    ];

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Diseños para Cabello</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los estilos de Diseños para Cabello más populares.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {cortes.map((corte) => (
                    <div key={corte.id} className="border rounded-lg shadow-lg hover:shadow-xl transition">
                        <img
                            src={corte.src}
                            alt={corte.alt}
                            className="w-full h-auto rounded-t-lg aspect-square sm:w-[47vw] md:w-[31vw] lg:w-[23vw] lg:max-w-[350px]"
                        />
                        <p className="p-2 font-medium text-gray-700">{corte.alt}</p>
                    </div>
                ))}
            </div>

            <div className="mt-25">
                <Services currentPage="DiseñosCabello" />
            </div>
        </section>

    );
};

export default DiseñosCabello;
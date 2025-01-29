import React from "react";
import Services from '../services';

const CortesBarba: React.FC = () => {
    const cortes = [
        { id: 1, src: "public/media/Barbas/barba-1.jpeg", alt: "Barba-1" },
        { id: 2, src: "public/media/Barbas/barba-2.jpeg", alt: "Barba-2" },
        { id: 3, src: "public/media/Barbas/barba-3.jpeg", alt: "Barba-3" },
        { id: 4, src: "public/media/Barbas/barba-4.jpeg", alt: "Barba-4" },
        { id: 4, src: "public/media/Barbas/barba-5.jpeg", alt: "Barba-4" },
    ]

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Estilos de Barbas</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los Estilos de Barbas más populares.</p>
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
                <Services currentPage="CortesBarba" />
            </div>
        </section>

    );
};

export default CortesBarba;
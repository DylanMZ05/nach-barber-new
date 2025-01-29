import React from "react";

const CortesDeCabello: React.FC = () => {
    const cortes = [
        { id: 1, src: "public/media/Cortes/Corte-1.jpeg", alt: "Corte-1" },
        { id: 2, src: "public/media/Cortes/Corte-2.jpeg", alt: "Corte-2" },
        { id: 3, src: "public/media/Cortes/Corte-3.jpeg", alt: "Corte-3" },
        { id: 4, src: "public/media/Cortes/Corte-4.jpeg", alt: "Corte-4" },
        { id: 5, src: "public/media/Cortes/Corte-5.jpeg", alt: "Corte-5" },
        { id: 6, src: "public/media/Cortes/Corte-6.jpeg", alt: "Corte-6" },
        { id: 7, src: "public/media/Cortes/Corte-7.jpeg", alt: "Corte-7" },
        { id: 8, src: "public/media/Cortes/Corte-8.jpeg", alt: "Corte-8" },
        { id: 9, src: "public/media/Cortes/Corte-9.jpeg", alt: "Corte-9" },
        { id: 10, src: "public/media/Cortes/Corte-10.jpeg", alt: "Corte-10" },
        { id: 11, src: "public/media/Cortes/Corte-11.jpeg", alt: "Corte-11" },
        { id: 12, src: "public/media/Cortes/corte-12.jpg", alt: "Corte-12" },
    ];

    return (
        <section className="text-center py-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Cortes de Cabello</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar los estilos de cortes de cabello más populares.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {cortes.map((corte) => (
                    <div key={corte.id} className="border rounded-lg shadow-lg hover:shadow-xl transition">
                        <img
                            src={corte.src}
                            alt={corte.alt}
                            className="w-full h-auto rounded-t-lg aspect-square"
                        />
                        <p className="p-2 font-medium text-gray-700">{corte.alt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CortesDeCabello;
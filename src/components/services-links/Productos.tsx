import React from "react";
import Services from '../services';
import ServicesComponent from "./ServicesComponent";

const Productos: React.FC = () => {
    const cortes = [
        { id: 1, src: "media/Productos/productos1.jpeg", alt: "Producto-1" },
        { id: 2, src: "media/Productos/productos2.jpeg", alt: "Producto-2" },
        { id: 3, src: "media/Productos/productos3.jpeg", alt: "Producto-3" },
        { id: 4, src: "media/Productos/productos4.jpeg", alt: "Producto-4" },
        { id: 5, src: "media/Productos/productos5.jpeg", alt: "Producto-5" },
        { id: 6, src: "media/Productos/productos6.jpeg", alt: "Producto-6" },
        { id: 7, src: "media/Productos/productos7.jpeg", alt: "Producto-7" },
        { id: 8, src: "media/Productos/productos8.jpeg", alt: "Producto-8" },
        { id: 9, src: "media/Productos/productos9.jpeg", alt: "Producto-9" },
        { id: 10, src: "media/Productos/productos10.jpeg", alt: "Producto-10" },
        { id: 11, src: "media/Productos/productos11.jpeg", alt: "Producto-11" },
        { id: 12, src: "media/Productos/productos12.jpeg", alt: "Producto-12" },
    ];

    return (
        <section className="text-center pt-30 px-2 max-w-[1800px] flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-red-700">Nuestros Productos</h1>
            <p className="mt-4 text-lg">Aquí puedes explorar todos Nuestros Productos.</p>
            <ServicesComponent cortes={cortes} />

            <div className="mt-25">
                <Services currentPage="Productos" />
            </div>
        </section>

    );
};

export default Productos;
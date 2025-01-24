import React from 'react';
import Card from './card';

const Services: React.FC = () => {
    const cards = [
        {
            image: '../../media/Cortes/Corte-1.jpeg',
            text: 'CORTES DE CABELLO',
            link: '/cortes-de-cabello',
        },
        {
            image: '../../media/Barbas/barba-1.jpeg',
            text: 'ESTILOS DE BARBA',
            link: '/estilos-de-barba',
        },
        {
            image: '../../media/Diseños/diseño-1.jpg',
            text: 'GALERÍA DE DISEÑOS',
            link: '/galeria-de-disenos',
        },
        {
            image: '../../media/Productos/productos7.jpeg',
            text: 'PRODUCTOS',
            link: '/productos',
        },
    ];

    return (
        <section className="bg-neutral-900 pt-15 pb-25 w-[90vw] mx-auto">
            <div className="text-center text-white mb-8">
                <h2 className="text-[40px] font-semibold">EXPLORA LO MEJOR DEL ESTILO MASCULINO</h2>
                <div className="h-1 bg-red-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>
            <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {cards.map((card, index) => (
                    <Card key={index} image={card.image} text={card.text} link={card.link} />
                ))}
            </div>
        </section>
    );
};

export default Services;
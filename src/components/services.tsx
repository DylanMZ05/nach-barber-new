import React from 'react';
import Card from './card';

const Services: React.FC = () => {
    const cards = [
        {
            image: '/nach-barber-new/media/Cortes/corte-12.jpg',
            text: 'CORTES DE CABELLO',
            link: '/cortes-de-cabello',
        },
        {
            image: '/nach-barber-new/media/Barbas/barba-1.jpeg',
            text: 'ESTILOS DE BARBA',
            link: '/estilos-de-barba',
        },
        {
            image: '/nach-barber-new/media/Diseños/diseño-1.jpg',
            text: 'GALERÍA DE DISEÑOS',
            link: '/galeria-de-disenos',
        },
        {
            image: '/nach-barber-new/media/Productos/productos7.jpeg',
            text: 'PRODUCTOS',
            link: '/productos',
        },
    ];

    return (
        <section className='w-screen flex flex-col items-center relative'>
            <div className='w-[90vw] -translate-y-15 flex flex-col justify-start align-center text-center text-white'>
                <div id='inspiracion' className="bg-neutral-900 pt-[50px] pb-[75px] w-[90vw] mx-auto max-w-[1400px]">
                    <div className="text-center text-white mb-8">
                        <h3 className="text-[36px] md:text-[40px] font-semibold mx-5">EXPLORA LO MEJOR DEL ESTILO MASCULINO</h3>
                        <div className="h-1 bg-red-600 w-75 mx-auto mt-2 rounded-4xl"></div>
                    </div>
                    <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {cards.map((card, index) => (
                            <Card key={index} image={card.image} text={card.text} link={card.link} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
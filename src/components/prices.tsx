import React from 'react';
import Precios from './precios-card';


const Prices: React.FC = () => {
    return (
        <section id='precios' className='w-screen h-auto flex flex-col items-center justify-center mb-[50px]'>

            <div className='w-screen h-auto flex flex-col items-center justify-center text-center'>
                <h3 className="text-[36px] md:text-[40px] font-semibold ts-sm mx-4">NUESTROS SERVICIOS</h3>
                <div className="h-1 bg-blue-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className='flex flex-col items-start'>
                <div className='flex justify-between items-center mt-[25px] mx-9'>
                    <img src="/nach-barber-new/media/barba.png" alt="" className='hidden sm:block w-[60px] aspect-square mr-[15px]'/> 
                    <div>
                        <p className='font-semibold text-[18px] md:text-2xl'>En <span className='text-red-600 font-bold'>NACH Barbershop</span>, transformamos tu estilo.</p>
                        <p className='text-[18px] md:text-2xl'>Vos solo preocupate por llevarlo con confianza</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-[25px] mx-9'>
                    <img src="/nach-barber-new/media/peluqueria.png" alt="" className='hidden sm:block h-[60px] px-[12.2px] mr-[15px]'/>
                    <div>
                        <p className='font-semibold text-[18px] md:text-2xl'>Calidad, atención y estilo <span className='text-blue-600 font-bold'>garantizados</span></p>
                        <p className='text-[18px] md:text-2xl'>Una atención personalizada con productos premium</p>
                    </div>
                </div>
            </div>

            <div className='w-screen h-auto flex flex-col items-center justify-center mt-[50px] text-center'>
                <h3 className="text-[36px] md:text-[40px] font-semibold mx-4">LISTA DE PRECIOS</h3>
                <div className="h-1 bg-blue-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className='items-start mt-[25px] grid grid-cols-1 gap-y-3'>
                <Precios corte='Corte Clásico' precio='$ 8.000'/>
                <Precios corte='Fade / Degrade' precio='$ 10.000'/>
                <Precios corte='Barba' precio='$ 8.000'/>
                <Precios corte='Corte y Barba' precio='$14.000'/>
            </div>
            
        </section>
    );
}

export default Prices;
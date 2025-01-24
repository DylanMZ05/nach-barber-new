import React from 'react';

const Hero: React.FC = () => {
    return (
        <main className="bg-[url('../public/media/background.jpg')] h-screen bg-cover bg-center">
            <section className="bg-black/40 bg-center h-screen w-screen flex flex-col justify-center items-center text-white ts-xl">
                <img src="../public/media/Logo.png" alt="Logo" className="w-35 mb-[4vh] img-shadow" />
                <h1 className="text-5xl font-bold crimsontext mb-[2vh] ts-xl">NACH BARBERSHOP</h1>
                <h2 className="text-3xl font-bold mb-[1vh] text-shadow-xl ts-xl">SANTA TERESITA</h2>

                <div className="flex justify-between items-center font-medium">
                    <div className="flex items-center">
                        <img src="/media/marcador.png" alt="Marcador" className="mr-2 h-10 w-10" />
                        <div>
                            <p>Av 32 entre 3 y 4</p>
                            <p>Galería Aldea Paseo del Mar</p>
                        </div>
                    </div>

                    <hr className="h-13 w-0.5 bg-white rounded-xl opacity-70 ml-4 mr-4" />

                    <div className="flex items-center">
                        <img src="/media/marcador.png" alt="Marcador" className="mr-2 h-10 w-10" />
                        <div>
                            <p>Av 32 entre 3 y 4</p>
                            <p>Galería Aldea Paseo del Mar</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
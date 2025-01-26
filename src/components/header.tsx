import React from 'react';
import useScroll from '../scripts/useScroll';

const Header: React.FC = () => {
    const isScrolled = useScroll(50);

    return (
        <header
        className={`w-screen h-auto fixed z-50 transition-colors duration-300 ${
            isScrolled ? 'bg-neutral-950' : 'bg-gradient-to-b from-black to-transparent'
            }`}
        >
            <div className="flex justify-between items-center text-white">
                <div className="flex items-center p-2 ml-10">
                    <img
                        src="/nach-barber-new/media/Logo.png"
                        alt="Logo"
                        className="h-20 mr-2 img-shadow"
                    />
                    <p className="text-lg font-semibold crimsontext tracking-wider ts-xl">
                        NACH <br />
                        BARBERSHOP
                    </p>
                </div>
                <ul className="flex justify-between items-center w-175 mr-10 font-medium ts-xl">
                    <li>
                        <a href="#inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#inspiracion">Inspiración</a>
                    </li>
                    <li>
                        <a href="#servicios">Servicios</a>
                    </li>
                    <li>
                        <a href="#precios">Precios</a>
                    </li>
                    <li>
                        <a href="#ubicaciones">Ubicaciones</a>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
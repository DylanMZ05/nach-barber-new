import React from 'react';
import useScroll from '../hooks/useScroll';
import useActiveSection from '../hooks/useActiveSection';

const Header: React.FC = () => {
    const isScrolled = useScroll(50);
    const activeSection = useActiveSection([
        'inicio',
        'inspiracion',
        'precios',
        'ubicaciones',
        'contacto',
    ]);

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
                <ul className="flex justify-between items-center w-175 mr-20 font-medium ts-xl">
                    {[
                        { id: 'inicio', label: 'Inicio' },
                        { id: 'inspiracion', label: 'Inspiración' },
                        { id: 'precios', label: 'Precios' },
                        { id: 'ubicaciones', label: 'Ubicaciones' },
                        { id: 'contacto', label: 'Contacto' },
                    ].map((item) => (
                        <li
                            key={item.id}
                            className={`hover:text-red-500 hover:scale-105 transition-all duration-100
                            ${
                                activeSection === item.id ? 'text-red-500 scale-105 ts-xl' : ''
                            }`}
                        >
                            <a href={`#${item.id}`} >
                                {item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
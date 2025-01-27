import React from 'react';
import useScroll from '../hooks/useScroll';
import useActiveSection from '../hooks/useActiveSection';

const Header: React.FC = () => {
    const isScrolled = useScroll(50);
    const sectionIds = ['inicio', 'inspiracion', 'precios', 'ubicaciones', 'contacto'];
    const [activeSection, setActiveSectionManually] = useActiveSection(sectionIds);

    const handleClick = (id: string) => {
      setActiveSectionManually(id); // Actualiza manualmente la sección activa
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    };

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
                    {sectionIds.map((id) => (
                        <li
                            key={id}
                            className={`relative hover:text-red-500 hover:scale-105 hover:underline hover:underline-offset-5 hover:decoration-2 transition-all duration-100 ${
                                activeSection === id
                                    ? 'text-red-500 underline underline-offset-5 decoration-2 scale-105'
                                    : ''
                            }`}
                        >
                            <a
                                href={`#${id}`}
                                onClick={() => handleClick(id)} // Actualiza manualmente el estado y realiza scroll
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
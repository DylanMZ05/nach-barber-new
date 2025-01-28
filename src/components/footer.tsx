import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-950 flex items-center justify-center">
            <section id='contacto' className="bg-neutral-950 w-screen max-w-[1400px] flex-col align-center flex justify-center py-10 md:flex-row md:justify-between md:items-start md:px-10">
                <div className="text-white p-2 flex align-center flex-col justify-center text-center">
                    <img
                        src="/nach-barber-new/media/Logo.png"
                        alt="Logo"
                        className="h-25 mb-2 img-shadow mx-auto"
                    />
                    <p className="text-2xl font-semibold crimsontext tracking-wider ts-xl">
                        NACH <br />
                        BARBERSHOP
                    </p>
                </div>
                <div className=" text-white w-80 mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center mt-5">Contacto</h2>
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-xl font-medium mb-1">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-700 text-white border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xl font-medium mb-1">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full bg-gray-700 text-white border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu mensaje"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <h2 className="text-3xl font-bold mb-4 text-white text-center">Redes</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="">
                            <img src="/nach-barber-new/media/instagram.png" alt="" className="h-13"/>
                        </a>
                        <a href="">
                            <img src="/nach-barber-new/media/whatsapp.png" alt="" className="h-13 rounded-[12px]"/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
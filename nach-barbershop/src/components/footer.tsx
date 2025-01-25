import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-950 flex justify-around py-10">
            <div className="text-white p-2">
                <img
                    src="../public/media/Logo.png"
                    alt="Logo"
                    className="h-25 mb-2 img-shadow"
                />
                <p className="text-2xl font-semibold crimsontext tracking-wider ts-xl">
                    NACH <br />
                    BARBERSHOP
                </p>
            </div>
            <div className=" text-white w-80">
                <h2 className="text-3xl font-bold mb-4">Contacto</h2>
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
            <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Redes</h2>
                <div className="grid grid-cols-2 gap-4">
                    <a href="">
                        <img src="../public/media/instagram.png" alt="" className="h-13"/>
                    </a>
                    <a href="">
                        <img src="../public/media/whatsapp.png" alt="" className="h-13 rounded-[12px]"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
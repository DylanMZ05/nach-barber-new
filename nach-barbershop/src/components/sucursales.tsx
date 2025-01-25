import React from "react";

const Sucursales: React.FC = () => {
    
    return (
        <section id="ubicaciones" className='w-screen h-auto bg-neutral-900 flex flex-col items-center justify-center py-[50px]'>
        
            <div className='w-screen h-auto flex flex-col items-center justify-center mb-[50px]'>
                <h3 className="text-[40px] font-semibold text-white ts-sm">NUESTRAS SUCURSALES</h3>
                <div className="h-1 bg-red-600 w-75 mx-auto mt-2 rounded-4xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-7">
                <div>
                    <img src="../../public/media/sucursal-1.jpeg" alt="" className="w-[450px] rounded-2xl mb-[15px]"/>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="../../public/media/marcador.png" alt="" className="h-[40px] aspect-square mr-2"/>
                            <div>
                                <p className="text-white font-semibold">Calle 2 entre 37 y 38</p>
                                <p className="text-white">Galería Aldea Paseo del Mar</p>
                            </div>
                        </div>
                        
                        <a href=""className="flex items-center bg-white py-1 px-3 rounded-4xl">
                            <img src="../../public/media/camino.png" alt="" className="h-[30px] aspect-square mr-1 "/>
                            <p className="font-semibold transform scale-y-120">Como llegar</p>
                        </a>
                    
                    </div>
                </div>

                <div>
                    <img src="../../public/media/sucursal-1.jpeg" alt="" className="w-[450px] rounded-2xl mb-[15px]"/>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <img src="../../public/media/marcador.png" alt="" className="h-[40px] aspect-square mr-2"/>
                            <div>
                                <p className="text-white font-semibold">Calle 2 entre 37 y 38</p>
                                <p className="text-white">Galería del Teatro</p>
                            </div>
                        </div>
                        
                        <a href=""className="flex items-center bg-white py-1 px-3 rounded-4xl">
                            <img src="../../public/media/camino.png" alt="" className="h-[30px] aspect-square mr-1 "/>
                            <p className="font-semibold transform scale-y-120">Como llegar</p>
                        </a>
                    
                    </div>
                </div>

            </div>
        
        </section>
    );
}

export default Sucursales;
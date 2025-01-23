import './App.css'

function App() {

  return (
    <>
      <header className='w-screen h-auto bg-gradient-to-b from-black to-transparent fixed z-50'>
        <div className='flex justify-between items-center p-4 text-white'>
          <div className='flex items-center p-2 ml-10'>
            <img src="media/Logo.png" alt="" className='h-20 mr-2 img-shadow'/>
            <p className='text-lg font-semibold crimsontext tracking-wider ts-xl'>NACH <br></br>BARBERSHOP</p>
          </div>
          <ul className='flex justify-between items-center w-175 mr-10 font-medium ts-xl'>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Inspiración</a>
            </li>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="">Precios</a>
            </li>
            <li>
              <a href="">Ubicaciones</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
      </header>

      <main className='bg-[url("../media/background.jpg")] h-screen bg-cover bg-center'>
        
        <section className='bg-black/40 bg-center h-screen w-screen flex flex-col justify-center items-center text-white ts-xl'>

          <img src="media/Logo.png" alt="" className='w-35 mb-[4vh] img-shadow'/>
          <h1 className='text-5xl font-bold crimsontext mb-[2vh] ts-xl'>NACH BARBERSHOP</h1>
          <h2 className='text-3xl font-bold mb-[1vh] text-shadow-xl ts-xl'>SANTA TERESITA</h2>

          <div className='flex justify-between items-center font-medium'>

            <div className='flex items-center'>
              <img src="media/marcador.png" alt="" className='mr-2 h-10 w-10'/>
              <div>
                <p>Av 32 entre 3 y 4</p>
                <p>Galería Aldea Paseo del Mar</p>
              </div>
            </div>

            <hr className='h-13 w-0.5 bg-white rounded-xl opacity-70 ml-4 mr-4'/>

            <div className='flex items-center'>
              <img src="media/marcador.png" alt="" className='mr-2 h-10 w-10'/>
              <div>
                <p>Av 32 entre 3 y 4</p>
                <p>Galería Aldea Paseo del Mar</p>
              </div>
            </div>

          </div>

        </section>

      </main>

      <section className='h-screen w-screen flex flex-col items-center relative'>
        <div className='w-[90vw] h-100 bg-neutral-900 -translate-y-15 flex flex-col justify-center text-white'>
          <h4 className='font-semibold text-4xl mt-10'>EXPLORA LO MEJOR DEL ESTILO MASCULINO</h4>
          <hr className='w-20'></hr>
        </div>
      </section>
    </>
  )
}

export default App

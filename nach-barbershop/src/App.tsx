import './App.css'

function App() {

  return (
    <>
      <header className='w-screen h-auto bg-gradient-to-b from-black to-transparent fixed'>
        <div className='flex justify-between items-center p-4 text-white'>
          <div className='flex items-center p-2 ml-10'>
            <img src="media/Logo.png" alt="" className='h-20 mr-2'/>
            <p className='text-lg font-semibold'>NACH <br></br>BARBERSHOP</p>
          </div>
          <ul className='flex justify-between items-center w-175 mr-10 font-medium'>
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
        
        <section className='bg-black/40 bg-center h-screen '>

        </section>

      </main>
    </>
  )
}

export default App

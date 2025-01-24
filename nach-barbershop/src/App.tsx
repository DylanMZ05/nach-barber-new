import './App.css'
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';

function App() {
  return (
    <>
      
      <Header />

      <Main />

      <section className='h-screen w-screen flex flex-col items-center relative'>
        <div className='w-[90vw] h-100  -translate-y-15 flex flex-col justify-start align-center text-center text-white'>
            <Services />
        </div>
      </section>
    </>
  )
}

export default App

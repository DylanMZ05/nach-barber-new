import './App.css';
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';
import Prices from './components/prices';
import Sucursales from './components/sucursales';
import Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CortesDeCabello from './components/services-links/CortesDeCabello';

function App() {
  return (
    <Router basename="/nach-barber-new">
      <Header />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Main />
              <Services />
              <Prices />
              <Sucursales />
            </>
          }
        />
        {/* Rutas individuales */}
        <Route path="/CortesDeCabello" element={<CortesDeCabello />} />
        <Route path="/estilos-de-barba" element={<div>Estilos de Barba</div>} />
        <Route path="/galeria-de-disenos" element={<div>Galería de Diseños</div>} />
        <Route path="/productos" element={<div>Productos</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
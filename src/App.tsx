import './App.css';
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';
import Prices from './components/prices';
import Sucursales from './components/sucursales';
import Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ScrollToTop from './hooks/ScrollToTop';
import CortesDeCabello from './components/services-links/CortesDeCabello';
import CortesBarba from './components/services-links/CortesBarba';
import DiseñosCabello from './components/services-links/DiseñosCabello';
import Productos from './components/services-links/Productos';

const ScrollToHash: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};

function App() {
    return (
        <Router basename="/nach-barber-new">
            <ScrollToTop />
            <ScrollToHash />
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main />
                            <Services currentPage="Inicio" />
                            <Prices />
                            <Sucursales />
                        </>
                    }
                />
                <Route path="/CortesDeCabello" element={<CortesDeCabello />} />
                <Route path="/CortesBarba" element={<CortesBarba />} />
                <Route path="/DiseñosCabello" element={<DiseñosCabello />} />
                <Route path="/Productos" element={<Productos />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
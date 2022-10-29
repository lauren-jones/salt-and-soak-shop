import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
import { Salts } from './components/salts/Salts';
import { Soaks } from './components/soaks/Soaks';
import { Masks } from './components/masks/Masks';
import { Gifts } from './components/gifts/Gifts';

export interface AppProps {}

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salts" element={<Salts />} />
          <Route path="/soaks" element={<Soaks />} />
          <Route path="/masks" element={<Masks />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

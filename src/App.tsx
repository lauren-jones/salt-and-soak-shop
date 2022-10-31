import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { ShoppingCart } from './components/shopping-cart/ShoppingCart';
import Product from './components/product/Product';
import { Category } from './components/category/Category';

export interface AppProps {}

function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />}/>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product/:name" element={<Product />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

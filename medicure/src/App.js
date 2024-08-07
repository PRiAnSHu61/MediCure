import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './views/Homescreen';
import ProductDisc from './components/ProductDescription';
import CartPage from './components/cartPage';
import { CartProvider } from './context/cartContext'; 

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homescreen />} />
            <Route path="/ProductPage" element={<ProductDisc />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

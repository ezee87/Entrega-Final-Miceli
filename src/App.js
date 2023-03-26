import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext/CartContext';
import React from 'react';
import Cart from './Components/Cart/Cart';
import ContactForm from './Components/ContactForm.jsx/ContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider value='Pablo'>

          <header className="App-header border-bottom">
            <NavBar />
          </header>

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/ContactForm' element={<ContactForm />} />
          </Routes>

        </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;

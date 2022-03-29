import React from 'react';
import './App.css';
import ProductPage from "../features/product-page/ProductPage";
import Cart from "../features/cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="App-header"><img src='logo.png' alt='Pizza Hut' className='App-logo' /></div>
      <div className="App-page-layout">
        <div className="App-products"><ProductPage /></div>
        <div className="App-cart"><Cart/></div>
      </div>

    </div>
  );
}

export default App;

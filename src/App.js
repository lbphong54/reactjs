//import logo from './logo.svg';
import './App.css';

import Home from './components/pages/Home';
import ProductDetails from './components/san-pham/chi-tiet-san-pham';
import { Route,Routes } from 'react-router-dom';

import React from 'react';



import './bootstrap-5.2.3-dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
       
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/product-detail/:productId" element={<ProductDetails/>}/>
      
    </Routes> 
    
    </>
  );
  
  
}

export default App;

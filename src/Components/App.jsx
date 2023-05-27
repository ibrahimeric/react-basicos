import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';
import { useState } from 'react';
import {data} from '../Js/data.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from './Error404';
import Signup from './Signup';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [categorias, setCategorias] = useState('OFERTAS');

  let product = (data.filter((dato) =>
    dato.categoria.toLowerCase().includes('oferta'.toLocaleLowerCase())))

  const [products, setProducts] = useState(product);
  const [animate, setAnimate] = useState(0);
  const [contacto, setContacto] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header allProducts = {allProducts} setAllProducts = {setAllProducts} 
        total = {total} setTotal = {setTotal} 
        countProducts = {countProducts} setCountProducts = {setCountProducts}
        setProducts = {setProducts}
        setCategorias = {setCategorias}
        animate = {animate} setAnimate = {setAnimate}
        contacto = {contacto} setContacto = {setContacto}/>
        
        <Routes>
          <Route path="/" element={<>
            <Slider/>
            <Body allProducts = {allProducts} setAllProducts = {setAllProducts} 
            total = {total} setTotal = {setTotal} 
            countProducts = {countProducts} setCountProducts = {setCountProducts}
            products = {products}
            categorias = {categorias}
            setAnimate = {setAnimate}/>
            </>} />
            <Route path='/login' element={<Signup/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>

        <Footer
        setProducts = {setProducts}
        setCategorias = {setCategorias}
        setContacto = {setContacto}/>
      </Router>
    </div>
  );
}

export default App;

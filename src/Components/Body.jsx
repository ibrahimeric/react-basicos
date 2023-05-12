import React from 'react'
import '../Styles/Body.css'
import air_jordan1 from '../img/air_jordan1.jpg'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import adidas_dayjogger from '..//img/adidas_dayjogger.jpg'
import fondo from '..//img/fondo.jpg'
import {data} from '../Js/data.js'

const Principal = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal}) => {
  
  const onAddProduct = product => {
    if(allProducts.find(item => item.id === product.id)){
      const products = allProducts.map(item => item.id === product.id? {...item, quantity: item.quantity +1} : item);
      
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className="body" >
    
        <h1>PRODUCTOS DE OFERTA</h1>
        
        <div className="fondo"></div>
        <div className="container">
              {data.map(product => (
                <div className="card" key={product.id}>
                  <center>   <img src={product.urlImage} alt={product.nameProduct} /> </center>
                  <h6>{product.nameProduct}</h6>
                  <p>${product.price}</p>
                  <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                </div>
              ))}
        </div> 
        <div className="imgn"></div>
    </div>
  );
};

export default Principal

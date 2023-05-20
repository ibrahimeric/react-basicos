import React from 'react'
import '../Styles/Body.css'
import air_jordan1 from '../img/air_jordan1.jpg'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import adidas_dayjogger from '..//img/adidas_dayjogger.jpg'
import fondo from '..//img/fondo.jpg'


const Principal = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, products, setProducts}) => {
  
  // Metodo para añadir productos al carrito
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
    // comentario
    <div className="body" >
        
         <h1>PRODUCTOS DE OFERTA</h1>
        
        <div className="fondo"></div>
        <div className="container">
          {/* Aquí ejecutamos un map (Es como un foreach) para mostrar todos los productos que se encuentran cargados en el archivo data.js */}
          {/* Con la constante product vamos añadiendo todos los productos que se encuentran en data.js */}
              {products.map(product => (
                // Creamos un div y le añadimos la clase card y el id del producto con product.id
                <div className="card" key={product.id}>
                  {/* Cargamos la imagen con product.urlImage y el nombre del producto en alt con product.nameProduct */}
                  <center>   <img src={product.urlImage} alt={product.nameProduct} /> </center>
                  {/* Mostramos el nombre del producto con product.nameProduct */}
                  <h6>{product.nameProduct}</h6>
                  {/* Mostramos el precio del producto con product.price */}
                  <p>${product.price}</p>
                  {/* Creamos un boton y le añadimos el evento onClick para que cuando se precione ejecute el metodo onAddProduct que 
                  añade el producto al carrito*/}
                  <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                </div>
              ))}
        </div> 
        <div className="imgn"></div>
    </div>
  );
};

export default Principal

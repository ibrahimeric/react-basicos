import React from 'react'
import '../Styles/Principal.css';
import air_jordan1 from '../img/air_jordan1.jpg';
import adidas_dayjogger from '../img/adidas_dayjogger.jpg';
import nike_airmax97 from '../img/nike_airmax97.jpg';
const Principal = () => {
  return (
    <div class="principal">
        <h1 class="title">PRODUCTOS EN OFERTA</h1>
        <div class="container">
            <div class="card">
            <center>  <img src={air_jordan1} alt="" /></center>
                <h4>Air Jordan 1 mid</h4>
                <p>PRUEBA</p>
                <a href='#'>Comprar</a>
            </div>
            <div class="card">
           <center>   <img src={adidas_dayjogger} alt="" /></center>
                <h4>Adidas dayjogger</h4>
                <p>PRUEBA</p>
                  <a href='#'>Comprar</a>
            </div>
            <div class="card">
           <center> <img src={nike_airmax97} alt="" /></center>
                <h4>nike air max97</h4>
                <p>PRUEBA</p>
                <a href='#'>Comprar</a>
            </div>
        </div>
     </div>
  )
}

export default Principal

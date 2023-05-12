import React from 'react'
import '../Styles/Body.css'
import air_jordan1 from '../img/air_jordan1.jpg'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import adidas_dayjogger from '..//img/adidas_dayjogger.jpg'
import fondo from '..//img/fondo.jpg'

const Principal = () => {
  return (
    <div class="body" >
      <h1>PRODUCTOS DE OFERTA</h1>
        
      <div class="fondo"></div>
        <div class="container">
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
            <p>AIR JORDAN 1
              $1200
            </p>
          </div>

          <div class="card">
            <center> <img src={nike_airmax97} /></center>
          </div>

          <div class="card">
            <center><img src={adidas_dayjogger} /></center>
          </div>

          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>

          <div class="card">
            <center> <img src={nike_airmax97} /></center>
          </div>

          <div class="card">
            <center><img src={adidas_dayjogger} /></center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>

          <div class="card">
            <center> <img src={nike_airmax97} /></center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>
          <div class="card">
            <center>   <img src={air_jordan1} /> </center>
          </div>

        </div> 
        <div class="imgn"></div>
    </div>
  )
}

export default Principal

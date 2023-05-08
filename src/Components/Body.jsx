import React from 'react'
import '../Styles/Body.css'
import air_jordan1 from '../img/air_jordan1.jpg'
import nike_airmax97 from '../img/nike_airmax97.jpg'
import adidas_dayjogger from '..//img/adidas_dayjogger.jpg'

const Principal = () => {
  return (
    <div class="body">7
    
        <h1>PRODUCTOS DE OFERTA</h1>
        
        <div class="container">
            <div class="card">
           <center>   <img src={air_jordan1} /> </center>
            </div>

            <div class="card">
             <center> <img src={nike_airmax97} /></center>
            </div>

            <div class="card">
          <center><img src={adidas_dayjogger} /></center>
            </div>

        </div>
    </div>
  )
}

export default Principal

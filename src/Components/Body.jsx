import React from 'react'
import '../Styles/Body.css'
import air_jordan1 from '../img/air_jordan1.jpg'

const Principal = () => {
  return (
    <div class="body">7
    
        <h1>PRODUCTOS DE OFERTA</h1>
        
        <div class="container">
            <div class="card">
              <img src={air_jordan1} />
            </div>

            <div class="card">
              <img src="nike_airmax97" />
            </div>

            <div class="card">
              <img src="nike_airmax97" />
            </div>

        </div>
    </div>
  )
}

export default Principal

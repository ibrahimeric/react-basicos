import React from 'react'
import '../Styles/Footer.css';
import {data} from '../Js/data.js'

const Footer = ({products, setProducts, categorias, setCategorias}) => {
  function selectCategoria(filter){
    setProducts(data.filter((dato) =>
    dato.categoria.toLowerCase().includes(filter.toLocaleLowerCase())))
    setCategorias(filter.toUpperCase())
  }
  return (
    <div className="footer">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>Menu</h4>
            <a href="#">
              <p>Inicio</p>
            </a>
            <a href="#">
              <p id='contacto'>Contactanos</p>
            </a>
            <a href="#">
              <p>Categorias</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Productos</h4>
            <a href="#" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Camperas</p>
            </a>
            <a href="#" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Remeras</p>
            </a>
            <a href="#" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Pantalones</p>
            </a>
            <a href="#" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Shorts</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Empresa</h4>
            <a href="#">
              <p>Quienes somos</p>
            </a>
            <a href="#">
              <p>Favoritos</p>
            </a>
            <a href="#">
              <p>¿Cómo comprar?</p>
            </a>
            <a href="#">
              <p>Mi cuenta</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Redes sociales</h4>
            <div className='icon'>
              <ul className='iconLista'>
                <li className="iconos"><a className='facebook' href="#"><i className="fa fa-facebook"></i></a></li>
                <li className="iconos"><a className='instagram' href="#"><i className="fa fa-instagram"></i></a></li>
                <li className="iconos"><a className='twitter' href="#"><i className="fa fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              ©{new Date().getFullYear()} Total Look, Tucumán, Argentina
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href="#"><div><p>Terminos y Condiciones</p></div></a>
            <a href="#"><div><p>Politica de Privacidad</p></div></a>
            <a href="#"><div><p>Seguridad</p></div></a>
            <a href="#"><div><p>Cookies</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

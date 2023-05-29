import React from 'react'
import '../Styles/Footer.css';
import {data} from '../Js/data.js'
import { Link } from 'react-router-dom';

const Footer = ({setProducts, setCategorias, setContacto}) => {
      /*Funcion para filtrar los productos por categorias*/
      function selectCategoria(filter){
        /*Filtramos los productos utilizando la funcion filter para 
        comparar si las categorias de los productos almacenados en 
        data contienen el nombre de la categoria recibida por el 
        parametro filter. El resultado lo almacenamos en la constante 
        products*/
        setProducts(data.filter((dato) =>
        dato.categoria.toLowerCase().includes(filter.toLocaleLowerCase())))
        /*Almacenamos en la constante categorias el valor del 
        parametro filter en mayusculas*/
        setCategorias(filter.toUpperCase())
    }
  
  return (
    <div className="footer">
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <h4>Menu</h4>
            <Link to="/react-proyecto/build/">
            <p>Inicio</p>
            </Link>
              {/* Abrimos el formulario de contacto */}
              <p id='contacto' onClick={() => setContacto(true)}>Contactanos</p>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Productos</h4>
            {/* Con el evento onClick seleccionamos la categoria */}
            <a href="#categorias" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Camperas</p>
            </a>
            <a href="#categorias" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Remeras</p>
            </a>
            <a href="#categorias" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Pantalones</p>
            </a>
            <a href="#categorias" onClick={evt => selectCategoria(evt.target.textContent)}>
              <p>Shorts</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Empresa</h4>
            <Link to="/react-proyecto/build/about">
              Quienes somos
            </Link>
            <a href="#">
              <p>Favoritos</p>
            </a>
            <a href="#">
              <p>¿Cómo comprar?</p>
            </a>
            <Link to="/react-proyecto/build/login">
              <p>Mi cuenta</p>
            </Link>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Redes sociales</h4>
            <div className='icon'>
              <ul className='iconLista'>
                <li className="iconos"><a className='facebook' href="https://www.facebook.com/leomessi/" target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                <li className="iconos"><a className='instagram' href="https://www.instagram.com/leomessi/" target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                <li className="iconos"><a className='twitter' href="https://twitter.com/leomessisite/" target='_blank' rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
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

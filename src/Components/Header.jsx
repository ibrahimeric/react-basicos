import React from 'react'
import '../Styles/Header.css';
import { useState } from 'react';
import logoImg from '../img/Logo-Tienda-de-ropa.png';
// Importamos el archivo data.js que contiene todos los producto.
import {data} from '../Js/data.js'

const Header = ({allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts, products, setProducts, categorias, setCategorias, animate, setAnimate}) => {

    const [active, setActive] = useState(false);
    const [barsAnimate, setbarsAnimate] = useState(false);

    const onDeleteProduct = (product) => {
    const results = allProducts.filter(item => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    animationSubstract('-' + product.quantity)
    setAllProducts(results)
    };

    const onCleanCart = () => {
        setAllProducts([])
        animationSubstract('-' + countProducts)
        setCountProducts(0)
        setTotal(0)
    };

    
    let ubicacionPrincipal = window.pageYOffset;
    let Desplazamiento_Actual;
    const [Scroll, setScroll] = useState(false);
    window.onscroll = function(){
        if(window.innerWidth > 600 || active == true || barsAnimate == true){
            setScroll(false);
            return;
        }
        Desplazamiento_Actual = window.pageYOffset;
        if(ubicacionPrincipal >= Desplazamiento_Actual){
            setScroll(false);
        }
        else if(Desplazamiento_Actual > 40){
            setScroll(true);
        }
        ubicacionPrincipal = Desplazamiento_Actual;
    }
    
    function selectCategoria(filter){
        setbarsAnimate(false);
        setProducts(data.filter((dato) =>
        dato.categoria.toLowerCase().includes(filter.toLocaleLowerCase())))
        setCategorias(filter.toUpperCase())
    }

    function animationSubstract(number){
        document.getElementById('animado').textContent = number;
        document.getElementById('animado').style.color = "rgb(255, 0, 0)";
        setAnimate(2)
        
        setTimeout(function(){document.getElementById('animado').textContent = ''
        setAnimate(0)}, 300)
    }



    



return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav className={`Hnav ${Scroll ? 'HnavUp' : ''}`}>
            <a className="Hnavlogo" href="#"><img src={logoImg} alt="logo"/></a>

            <div className="HnavDiv">
                <ul className={`HnavList ${barsAnimate ? 'HactiveNavList' : ''}`}>
                    <li className={`HnavItem ${barsAnimate ? 'HactiveNavItem' : ''}`}>
                        <a className="HnavLink" href="#">Inicio</a>
                    </li>
                    <li className={`HnavItem ${barsAnimate ? 'HactiveNavItem' : ''}`}>
                        <a className="HnavLink" href="#contacto">Contactanos</a>
                    </li>
                    <li className={`HnavItem ${barsAnimate ? 'HactiveNavItem' : ''}`}>
                        <a className="HnavLink" href="#">Categorias <i className="Htoggle-dropdown dropdown-toggle"></i></a>
                        <ul className={`Hdropdown ${barsAnimate ? 'HactiveDropdown' : ''}`}>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Ofertas</p></a>
                            </li>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Camperas</p></a>
                            </li>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Pantalones</p></a>
                            </li>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Shorts</p></a>
                            </li>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Zapatillas</p></a>
                            </li>
                            <li className="HdropdowsItem" onClick={evt => selectCategoria(evt.target.textContent)}>
                                <a href="#categorias"><p className="HdropLink">Remeras</p></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="Hcart">
                <div className="animation">
                    <div id='animado' className={` ${animate !== 0? animate === 1? 'animateUp' : 'animateDown' : ''}`}></div>
                </div>
                <ul className='HcartList'>
                    <li className="Hbuy"><a className={`Hbuy-a ${countProducts === 0 ? 'Hbuy-aColor' : ''}`} onClick={() => setActive(!active)}><i className="Hbuy-li fa fa-shopping-cart"></i>
                    <div className={`Hcount-products ${countProducts === 0 ? 'Hcount-productsColor' : ''}`}>
					    <span id="Hcontador-productos">{countProducts}</span>
				    </div>
                    </a></li>
                </ul>
            </div>



            <div className={`Hcontainer-cart-products ${active ? '' : 'Hhidden-cart'}`}>
					{
                        allProducts.length ? (
                            <>
                                <div className="Hrow-product">
                                    {allProducts.map(product => (
                                        <div className="Hcart-product" key={product.id}>
					            	    	<div className="Hinfo-cart-product">
                	                            <span className="Hcantidad-producto-carrito">{product.quantity}</span>
                	                                <p className="Htitulo-producto-carrito">{product.nameProduct}</p>
                	                            <span className="Hprecio-producto-carrito">${product.price}</span>
                	                        </div>
					            	    	<svg
					            	    		xmlns="http://www.w3.org/2000/svg"
					            	    		fill="none"
					            	    		viewBox="0 0 24 24"
					            	    		strokeWidth="1.5"
					            	    		stroke="currentColor"
					            	    		className="Hicon-close"
                                                onClick={() => onDeleteProduct(product)}
					            	    	>
					            	    		<path
					            	    			strokeLinecap="round"
					            	    			strokeLinejoin="round"
					            	    			d="M6 18L18 6M6 6l12 12"
					            	    		/>
					            	    	</svg>
					            	    </div>
                                    ))}
					            </div>
                                <div className="Hcart-total">
                                    <h3>Total:</h3>
                                    <span className="Htotal-pagar">${total}</span>
                                </div>
                                <button className="Hbtn-clear-all" onClick={onCleanCart}>
                                    Vaciar carrito
                                </button>
                            </>
                        ) : (
                            <p className="Hcart-empty">El carrito está vacío</p>
                        )
                    }
			</div>

            <div className="Hicons">
                <ul className={`HiconList ${barsAnimate ? 'HactiveIconList' : ''}`}>
                    <li className={`Hicon ${barsAnimate ? 'HactiveIcon' : ''}`}><a className='Hfacebook' href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className={`Hicon ${barsAnimate ? 'HactiveIcon' : ''}`}><a className='Hinstagram' href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className={`Hicon ${barsAnimate ? 'HactiveIcon' : ''}`}><a className='Htwitter' href="#"><i className="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div className="Huser">
                <ul className='HuserList'>
                    <li className="Hlogin"><a href="#"><i className="fa fa-sign-in"></i></a></li>
                    <li className="Hprofile"><a href="#"><i className="fa fa-user"></i></a></li>
                </ul>
            </div>
            <div className="Hbars__menu" onClick={() => setbarsAnimate(!barsAnimate)}>
                <span className={`Hline1__bars-menu ${barsAnimate ? 'HactiveLine1__bars-menu' : ''}`}></span>
                <span className={`Hline2__bars-menu ${barsAnimate ? 'HactiveLine2__bars-menu' : ''}`}></span>
                <span className={`Hline3__bars-menu ${barsAnimate ? 'HactiveLine3__bars-menu' : ''}`}></span>
            </div>
        </nav>
    </div>
  )
}

export default Header

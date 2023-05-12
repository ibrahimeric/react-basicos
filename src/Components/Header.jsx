import React from 'react'
import '../Styles/Header.css';
import { useState } from 'react';
import logoImg from '../img/Logo-Tienda-de-ropa.png';

const Header = ({allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts}) => {

    const [active, setActive] = useState(false);

    const onDeleteProduct = (product) => {
    const results = allProducts.filter(item => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results)
    };

    const onCleanCart = () => {
        setAllProducts([])
        setCountProducts(0)
        setTotal(0)
    };
  return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav className="Hnav">
            <a className="Hnavlogo" href="#"><img src={logoImg} alt="logo"/></a>

            <div className="HnavDiv">
                <ul className="HnavList">
                    <li className="HnavItem">
                        <a className="HnavLink" href="#">Inicio</a>
                    </li>
                    <li className="HnavItem">
                        <a className="HnavLink" href="#">Contactanos</a>
                    </li>
                    <li className="HnavItem">
                        <a className="HnavLink" href="#">Categorias <i className="Htoggle-dropdown dropdown-toggle"></i></a>
                        <ul className='Hdropdown'>
                            <li className="HdropdowsItem">
                            <a className="HdropLink" href="#">Campreras</a>
                            </li>
                            <li className="HdropdowsItem">
                                <a className="HdropLink" href="#">Remeras</a>
                            </li>
                            <li className="HdropdowsItem">
                            <a className="HdropLink" href="#">Pantalones</a>
                            </li>
                            <li className="HdropdowsItem">
                            <a className="HdropLink" href="#">Shorts</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="Hcart">
                <ul className='HcartList'>
                    <li className="Hbuy"><a className='Hbuy-a' href="#" onClick={() => setActive(!active)}><i className="fa fa-shopping-cart"></i>
                    <div className="Hcount-products">
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
                <ul className='HiconList'>
                    <li className="Hicon"><a className='Hfacebook' href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="Hicon"><a className='Hinstagram' href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className="Hicon"><a className='Htwitter' href="#"><i className="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div className="Huser">
                <ul className='HuserList'>
                    <li className="Hlogin"><a href="#"><i className="fa fa-sign-in"></i></a></li>
                    <li className="Hprofile"><a href="#"><i className="fa fa-user"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header

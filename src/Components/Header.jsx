import React from 'react'
import '../Styles/Header.css';

const Header = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav class="Hnav">
            <a class="Hnavlogo" href="#"><img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png" alt="logo"/></a>

            <div class="HnavDiv">
                <ul class="HnavList">
                    <li class="HnavItem">
                        <a class="HnavLink" href="#">Inicio</a>
                    </li>
                    <li class="HnavItem">
                        <a class="HnavLink" href="#">Contactanos</a>
                    </li>
                    <li class="HnavItem">
                        <a class="HnavLink" href="#">Categorias <i class="Htoggle-dropdown dropdown-toggle"></i></a>
                        <ul className='Hdropdown'>
                            <li className="HdropdowsItem">
                            <a class="HdropLink" href="#">Campreras</a>
                            </li>
                            <li className="HdropdowsItem">
                                <a class="HdropLink" href="#">Remeras</a>
                            </li>
                            <li className="HdropdowsItem">
                            <a class="HdropLink" href="#">Pantalones</a>
                            </li>
                            <li className="HdropdowsItem">
                            <a class="HdropLink" href="#">Shorts</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="Hcart">
                <ul className='HcartList'>
                    <li className="Hbuy"><a className='Hbuy-a' href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div className="Hicons">
                <ul className='HiconList'>
                    <li className="Hicon"><a className='Hfacebook' href="#"><i class="fa fa-facebook"></i></a></li>
                    <li className="Hicon"><a className='Hinstagram' href="#"><i class="fa fa-instagram"></i></a></li>
                    <li className="Hicon"><a className='Htwitter' href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div className="Huser">
                <ul className='HuserList'>
                    <li className="Hlogin"><a href="#"><i class="fa fa-sign-in"></i></a></li>
                    <li className="Hprofile"><a href="#"><i class="fa fa-user"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header

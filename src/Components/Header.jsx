import React from 'react'
import '../Styles/Header.css';

const Header = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <nav class="nav">
            <a class="navlogo" href="#"><img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png" alt="logo"/></a>

            <div class="navDiv">
                <ul class="navList">
                    <li class="navItem">
                        <a class="navLink" href="#">Inicio</a>
                    </li>
                    <li class="navItem">
                        <a class="navLink" href="#">Contactanos</a>
                    </li>
                    <li class="navItem">
                        <a class="navLink" href="#">Categorias <i class="toggle-dropdown dropdown-toggle"></i></a>
                        <ul className='dropdown'>
                            <li className="dropdowsItem">
                            <a class="dropLink" href="#">Campreras</a>
                            </li>
                            <li className="dropdowsItem">
                                <a class="dropLink" href="#">Remeras</a>
                            </li>
                            <li className="dropdowsItem">
                            <a class="dropLink" href="#">Pantalones</a>
                            </li>
                            <li className="dropdowsItem">
                            <a class="dropLink" href="#">Shorts</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="cart">
                <ul className='cartList'>
                    <li className="buy"><a className='buy-a' href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div className="icons">
                <ul className='iconList'>
                    <li className="icon"><a className='facebook' href="#"><i class="fa fa-facebook"></i></a></li>
                    <li className="icon"><a className='instagram' href="#"><i class="fa fa-instagram"></i></a></li>
                    <li className="icon"><a className='twitter' href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div className="user">
                <ul className='userList'>
                    <li className="login"><a href="#"><i class="fa fa-sign-in"></i></a></li>
                    <li className="profile"><a href="#"><i class="fa fa-user"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header

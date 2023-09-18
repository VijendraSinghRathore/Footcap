import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg'
function Navbar() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className='row py-3 text-center'>
                        <nav className="navbar navbar-expand-sm navbar-dark ">
                            <div className="col-md-3">
                                <a href=""><img src={logo} alt="logo" /></a>                               
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="togle-btn navbar-toggler-icon"></span>
                            </button>
                            <div className="col-md-7 collapse navbar-collapse">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link px-4 text-dark" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark px-4" to="#">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-dark px-4" to="#">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link  text-dark px-4" to="#">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark px-4" to="#">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark px-4" to="#">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <a href="#"><i class="fa fa-search text-dark px-2 icon" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-user-o text-dark px-2 icon" aria-hidden="true"></i></a>
                                <a href="#"> <i class="fa fa-heart-o text-dark  px-2 icon" aria-hidden="true"></i> </a>
                                <a href="#"><i class="fa fa-lock text-dark px-2 icon" aria-hidden="true"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

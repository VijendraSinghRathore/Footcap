import React from 'react'
import logo from '../Images/logo.svg'

function Footer() {
    return (
        <>
            <footer className="footer-top pt-5">
                <div className="container">
                    <div className="footer-brand">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <a href="#">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 text-end">
                                <div className="social-list">
                                    <a href="#" className='social-link'><i className='fa fa-facebook px-2'></i></a>
                                    <a href="#" className='social-link'><i className='fa fa-twitter px-2'></i></a>
                                    <a href="#" className='social-link'><i className='fa fa-pinterest px-2'></i></a>
                                    <a href="#" className='social-link'><i className='fa fa-linkedin px-2'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-md-4">
                            <ul class="footer-list">
                                <li>
                                    <p class="footer-title">contact us</p>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon fa fa-map-marker'></i>
                                        <p className="footer-text m-0">2751 S Parker Rd, Aurora, CO 80014,<br /> United States</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon fa fa-phone'></i>
                                        <a href="tel:+557343673257"><span className='footer-text-span'>+557343673257</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon fa fa-envelope'></i>
                                        <a href="tel:+557343673257"><span className='footer-text-span'>footcap@help.com</span></a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul class="footer-list">
                                <li>
                                    <p class="footer-title">my account</p>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon1 fa fa-angle-right'></i>
                                        <a href="#"><span className='footer-text-span'>My Account</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon1 fa fa-angle-right'></i>
                                        <a href="#"><span className='footer-text-span'>Viev Card</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon1 fa fa-angle-right'></i>
                                        <a href="#"><span className='footer-text-span'>Wishlist</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon1 fa fa-angle-right'></i>
                                        <a href="#"><span className='footer-text-span'>Compare</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer-list d-flex">
                                        <i className='footer-icon1 fa fa-angle-right'></i>
                                        <a href="#"><span className='footer-text-span'>New Products</span></a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul class="footer-list">
                                <li>
                                    <p class="footer-title">opening time</p>
                                </li>
                            </ul>
                            <table className='footer-table'>
                                <tbody>
                                    <tr className='table-row'>
                                        <th>Mon-Tue:</th>
                                        <td>8AM-10PM</td>
                                    </tr>
                                    <tr className='table-row'>
                                        <th>Wed:</th>
                                        <td>8AM-7PM</td>
                                    </tr>
                                    <tr className='table-row'>
                                        <th>Fri:</th>
                                        <td>7AM-12PM</td>
                                    </tr>
                                    <tr className='table-row'>
                                        <th>Sat:</th>
                                        <td>9AM-8PM</td>
                                    </tr>
                                    <tr className='table-row'>
                                        <th>Sun:</th>
                                        <td>Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <ul class="footer-list">
                                <li>
                                    <p class="footer-title">Newletter</p>
                                    <p>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>
                                </li>
                            </ul>
                            <form>
                                <input className='newsletter-input' type="email" placeholder='Email Address' />
                                <button className='sub-btn'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className='text-center text-white'>© 2022 <a href="#" className='code'>codewithsadee.</a> All Rights Reserved</p>
                    </div>
                </div>
            </footer>
            <a href="#" className='go-top-btn active'>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </a>

        </>
    )
}

export default Footer;

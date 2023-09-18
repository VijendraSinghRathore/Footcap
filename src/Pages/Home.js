import React from 'react'
import collection1 from '../Images/collection-1.jpg'
import collection2 from '../Images/collection-2.jpg'
import collection3 from '../Images/collection-3.jpg'
import product from '../Images/product-1.jpg'
import product1 from '../Images/product-2.jpg'
import product2 from '../Images/product-3.jpg'
import product3 from '../Images/product-4.jpg'
import service from '../Images/service-1.png'
import service1 from '../Images/service-2.png'
import service2 from '../Images/service-3.png'
import service3 from '../Images/service-4.png'
import insta1 from '../Images/insta-1.jpg'
import insta2 from '../Images/insta-2.jpg'
import insta3 from '../Images/insta-3.jpg'
import insta4 from '../Images/insta-4.jpg'
import insta5 from '../Images/insta-5.jpg'
import insta6 from '../Images/insta-6.jpg'
import insta7 from '../Images/insta-7.jpg'
import insta8 from '../Images/insta-8.jpg'
import Footer from '../Component/Footer'

function Home() {


  return (
    <>
      <section className="row section-hero px-0 mx-0">
        <div className="head">
          <h2 className='hero title pb-3'>New Summer<br/> <strong className='hero-shoes'>Shoes Collection</strong></h2>
          <p className='hero-text pb-2'>Competently expedite alternative benefits whereas leading-<br />
            edge catalysts for change. Globally leverage existing an<br />
            expanded array of leadership.</p>
          <a href="#"><button className='btnn'>shop now <i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></button></a>
        </div>
      </section>
      <section className="section-collection">
        <div className="container">
          <div className="row my-5 py-3">
            <div className="collection col-md-4">
              <img src={collection1} alt="" />
              <div className="men-section">
                <h3 className="text-center text-uppercase">men collections</h3>
              </div>
              <div className="explore-sec">
                <a href="#"><button className='explore-btn'>explore now <i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></button></a>
              </div>
            </div>
            <div className="collection col-md-4">
              <img src={collection2} alt="" />
              <div className="men-section">
                <h3 className="text-center text-uppercase">women collections</h3>
              </div>
              <div className="explore-sec">
               <a href="#"> <button className='explore-btn'>explore now<i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></button></a>
              </div>
            </div>
            <div className="collection col-md-4">
              <img src={collection3} alt="" />
              <div className="men-section">
                <h3 className="text-center text-uppercase">sports collections</h3>
              </div>
              <div className="explore-sec">
                <a href="#">  <button className='explore-btn'>explore now <i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></button></a>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="best-section pt-5">
        <div className="container">
          <div className="row">
            <h2 className='best-heading text-center text-capitalize pb-2'>bestsellers products</h2>
            <ul className='filter-list d-flex pb-4'>
              <a href="#"><li><button className='filter-btn1'>all</button></li></a>
             <a href="#"> <li><button className='filter-btn'>nike</button></li></a>
             <a href="#"> <li><button className='filter-btn'>adidas</button></li></a>
             <a href="#"> <li><button className='filter-btn'>puma</button></li></a>
             <a href="#"> <li><button className='filter-btn'>bata</button></li></a>
              <a href="#"><li><button className='filter-btn'>apex</button></li></a>
            </ul>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product} alt="" />
                <div className="banner-new"><data className='new'>new</data></div>
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>women</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">running sneaker shoes</a>
                </div>
                <data className='card-price'>$180.85</data>
                            </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product1} alt="" />
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>sports</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">leather mens slipper</a>
                </div>
                <data className='card-price'>$190.85</data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product2} alt="" />
                <div className="banner-new"><data className='new'>new</data></div>
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>women</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">simple fabric shoe</a>
                </div>
                <data className='card-price'>$160.85</data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product3} alt="" />
                <div className="banner-new"><data className='new'>-25%</data></div>
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>sports</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">air jordan 7 retro</a>
                </div>
                <data className='card-price'>$180.85</data>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product} alt="" />
                <div className="banner-new"><data className='new'>new</data></div>
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>women</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">nike air max 270 se</a>
                </div>
                <data className='card-price'>$120.85</data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product1} alt="" />
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>women</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">adidas sneakers shoes</a>
                </div>
                <data className='card-price'>$100.85</data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product2} alt="" />
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>sports</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">nike basketball shoes</a>
                </div>
                <data className='card-price'>$120.85</data>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-banner">
                <img src={product3} alt="" />
                <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
              </div>
              <div className="card-content">
                <div className="card-cat">
                  <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                  <a href="#" className='card-cat-link'>women</a>
                </div>
                <div className="card-title mb-2">
                  <a href="#">simple fabric shoe</a>
                </div>
                <data className='card-price'>$100.85</data>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section  py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cta">
                <p className='cta-sub text-capitalize text-white'>adidad shoes</p>
                <h4 className='cta-title text-capitalize text-white pb-3'>the summer sale<br /> off 50%</h4>
                <a href="#" className='cta-list'>shop Now<i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cta1">
                <p className='cta-sub text-capitalize text-white'>nike shoes</p>
                <h4 className='cta-title text-capitalize text-white pb-3'>makes yourself<br />keep sporty</h4>
                <a href="#" className='cta-list'>shop now<i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nike-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner-bg">
                <h4 className="banner-title text-white text-capitalize">new trand edition</h4>
                <a href="#" className='banner-list'><span>explore all</span><i class="fa fa-arrow-right ps-2 hero-icon" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="section-title pb-5">
                  <span class="text ">Nike Special</span>
                  <span class="line"></span>
                </div>
                <div className="col-md-4">
                  <div className="card-banner">
                    <img src={product} alt="" />
                    <div className="banner-new"><data className='new'>new</data></div>
                    <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
                  </div>
                  <div className="card-content">
                    <div className="card-cat">
                      <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                      <a href="#" className='card-cat-link'>women</a>
                    </div>
                    <div className="card-title mb-2">
                      <a href="#">running sneaker shoes</a>
                    </div>
                    <data className='card-price'>$180.85</data>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-banner">
                    <img src={product1} alt="" />
                    <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
                  </div>
                  <div className="card-content">
                    <div className="card-cat">
                      <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                      <a href="#" className='card-cat-link'>sports</a>
                    </div>
                    <div className="card-title mb-2">
                      <a href="#">leather mens slipper</a>
                    </div>
                    <data className='card-price'>$190.85</data>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-banner">
                    <img src={product2} alt="" />
                    <ul className='card-icon'>
                  <li><i className='card-face fa fa-facebook'></i></li>
                  <li><i class="card-face fa fa-shopping-cart" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-heart-o" aria-hidden="true"></i></li>
                  <li><i class="card-face fa fa-eye" aria-hidden="true"></i></li>
                </ul>
                  </div>
                  <div className="card-content">
                    <div className="card-cat">
                      <a href="#" className='card-cat-link'>men</a> <span>/ </span>
                      <a href="#" className='card-cat-link'>women</a>
                    </div>
                    <div className="card-title mb-2">
                      <a href="#">simple fabric shoe</a>
                    </div>
                    <data className='card-price'>$160.85</data>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="row px-3 py-5">
            <div className="col-md-3">
              <div className="service-main d-flex align-items-center">
                <div className="service-icon">
                  <img src={service} alt="" />
                </div>
                <div className="sercice-headin ps-3 pt-4">
                  <h4 className='card-title'>free shiping</h4>
                  <p className='card-pera'>all orders over <span className='card-span'>$150</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-main d-flex align-items-center">
                <div className="service-icon">
                  <img src={service1} alt="" />
                </div>
                <div className="sercice-headin ps-3 pt-4">
                  <h4 className='card-title'>quick payment</h4>
                  <p className='card-pera'>100% secure payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-main d-flex align-items-center">
                <div className="service-icon">
                  <img src={service2} alt="" />
                </div>
                <div className="sercice-headin ps-3 pt-4">
                  <h4 className='card-title'>free returns</h4>
                  <p className='card-pera'>money back in 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-main d-flex align-items-center">
                <div className="service-icon">
                  <img src={service3} alt="" />
                </div>
                <div className="sercice-headin ps-3 pt-4">
                  <h4 className='card-title'>24/7 support</h4>
                  <p className='card-pera'>get quick support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="insta-post">
        <div className="instas pt-0 mt-0">
          <ul className="list-inline">
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta1} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta2} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta3} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta4} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta5} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta6} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta7} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="insta">
                <img src={insta8} alt="" />
                <div className="insta-icon">
                  <a href="#"><i className="fa fa-instagram instagram-icon"></i></a>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Home;

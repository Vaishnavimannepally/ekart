import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Home() {
  return (
    <div style={{backgroundColor:"white"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" height="50" width="90" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Smart Watches</a></li>
                  <li><a className="dropdown-item" href="#">Wireless Headphones</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Neckbands</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">boAt Personalisation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gift with boAt</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#"> Daily Deals</a></li>
                  <li><a className="dropdown-item" href="#"> Do What FloAts Your boAt</a></li>
                  <li><a className="dropdown-item" href="#">Blogs</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit" style={{ borderRadius: '20px' }}>search</button>
            </form>
          </div>
        </div>
      </nav>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/AD_155_Homapage_Banner_WEB_1600x.jpg?v=1710570943" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Homepage_Banner___Liquidation_Product_WEB_1600x.jpg?v=1710316754" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/Stone_SPINX_PRO_HP_Banner_WEB_1_1600x.jpg?v=1710147607" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
<div style={{padding:"40px"}}>
<h2>Shop By Lifestyle</h2>
<div class="c">
  <div class="row">
    <div class="col">
    <div class="card" style={{boxShadow:"0 0 10px black"}}>
  <img src="https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><strong>For Fitness</strong></p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{boxShadow:"0 0 10px black"}}>
  <img src="https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><strong>For Parties</strong></p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{boxShadow:"0 0 10px black"}}>
  <img src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><strong>For Work</strong></p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{boxShadow:"0 0 10px black"}}>
  <img src="https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><strong>For Audiophiles</strong></p>
  </div>
</div>
    </div>
  </div>
</div>
</div>


    <div>
      <img src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_1_1600x.jpg?v=1712559891" width="100%"/>
    </div>
    <section style={{padding:"100px"}}>
      <div class="c1" style={{margin:"20px auto"}}>
  <div class="row">
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockid_Rush.jpg?v=1692598817"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Rockerz 440</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Rockerz 440</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Rockerz 440</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="c2">
  <div class="row">
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC_Limited_Edition.jpg?v=1714034655"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Nirvana ION ANC Limited Edition
</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockid_Rush.jpg?v=1692598817"
  
  class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Airdopes 131</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_75520e83-ecd9-48d4-8d58-cb6ca3c78374.jpg?v=1698912191"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Rockerz 448</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</div>;



<div class="c3">
  <div class="row">
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Rockerz 440</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_Majestic.jpg?v=1714033662"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Stone Majestic</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style={{ width: "18rem" , boxShadow:"0 0 10px black"}}>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB_A1040.jpg?v=1714121962"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Aavante Bar A1040</h5>
          <a href="#" class="btn btn-primary">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>




<footer className="bg-dark text-light py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5>Follow Us</h5>
                  <div className="social-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16" style={{marginRight:"20px"}}>
  <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
</svg>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Contact Us</h5>
                  <ul className="list-unstyled">
                    <li>Email: contact@example.com</li>
                    <li>Phone: +91-9911009889</li>
                    <li>Address: 123 Street, Hyderabad, India</li>
                  </ul>
                </div>
              </div>
              <hr className="bg-light" />
              <p className="mb-0 text-center">© 2021 Online Food Shop. All rights reserved.</p>
            </div>
          </footer>
        
     </div>
  );
}

export default Home;

import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <div id="preloader">
    </div>
        <div className="top-navbar style-4">
  <div className="container">
    <div className="content text-white">
      <img
        src="assets/img/icons/nav_icon/imoj_heart.png"
        alt=""
        className="icon-15"
      />
      <span className="fs-10px op-6">reBLISS </span>
      {/* <small class="op-10 fs-10px"> and </small> */}
      <span className="fs-10px op-6" />
      <Link
        to="/"
        className="fs-10px text-decoration-underline ms-2"
      >
        Register Now
      </Link>
    </div>
  </div>
</div>

        <nav className="navbar navbar-expand-lg navbar-light style-4">
  <div className="container">
    <Link to="/" className="navbar-brand">
      <img src="assets/img/rblogo.png" alt="" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            about us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog and Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            contact us
          </Link>
        </li>
      </ul>
      <div className="nav-side">
        <div className="d-flex align-items-center">
          <Link to="#"
            
            className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold"
          >
            <span>
              Join as Saathi <i className="bi bi-arrow-right ms-1" />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

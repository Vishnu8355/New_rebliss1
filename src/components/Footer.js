import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.facebook.com/reblissapp/?ref=page_you_manage"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.youtube.com/c/reBLISS"
        role="button"
      >
        <i className="fab fa-youtube" />
      </a>
      {/* Instagram */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.instagram.com/reblissapp/"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.linkedin.com/company/84881032/admin/"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
    </section>
    {/* Section: Social media */}
    {/* Section: Form */}
    <section className="">
      <form action="">
        {/*Grid row*/}
        <div className="row d-flex justify-content-center">
          {/*Grid column*/}
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-5 col-12">
            {/* Email input */}
            <div className="form-outline form-white mb-4">
              <input
                type="email"
                id="form5Example21"
                className="form-control"
                placeholder="Enter email here..."
              />
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-auto">
            {/* Submit button */}
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </form>
    </section>
    {/* Section: Form */}
    {/* Section: Text */}
    {/* Section: Text */}
    {/* Section: Links */}
    <section className="">
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase"> Quicks Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="home-app-landing.html" className="text-white">
                Home
              </a>
            </li>
            <li style={{ marginLeft: 17 }}>
              <a href="page-about-app.html" className="text-white">
                About us
              </a>
            </li>
            <li style={{ marginRight: 10 }}>
              <a href="page-blog-app.html" className="text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="#!" style={{ marginLeft: 8 }} className="text-white">
                Tranning
              </a>
            </li>
            <li>
              <a
                href="page-contact-app.html"
                style={{ marginLeft: 22 }}
                className="text-white"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">BENEFITS</h5>
          <ul className="list-unstyled mb-0">
            <li style={{ marginLeft: 16 }}>
              <a href="#!" className="text-white">
                Saathi
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                TSM
              </a>
            </li>
            <li style={{ marginLeft: 36 }}>
              <a href="#!" className="text-white">
                Merchant
              </a>
            </li>
            <li style={{ marginLeft: 23 }}>
              <a href="#!" className="text-white">
                Partner
              </a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">CONTACT US:</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#" className="text-white">
                Phone No - 09289046988
              </a>
            </li>
            <li style={{ marginLeft: 23 }}>
              <a href="customercare@rebliss.in" className="text-white">
                Email Us - customercare@rebliss.in
              </a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">ADDRESS:</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">
                Kutumbh Care Pvt Ltd, B 154, B Block, Sector 63, Noida, Uttar
                Pradesh 201301
              </a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
      </div>
      {/*Grid row*/}
    </section>
    {/* Section: Links */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2020 Copyright 
    <a className="text-white" href="https://rebliss.in">
      rebliss.in
    </a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

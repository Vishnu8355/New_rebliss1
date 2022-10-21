import React from 'react'

export default function Testimonial() {
  return (
    <div>
        <section className="testimonials style-4 pt-70">
  <div className="container">
    <div className="content">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-head style-4">
            <small className="title_small">Testimonials</small>
            <h2 className="mb-30">
              Our Happiest<span> Customers </span>{" "}
            </h2>
          </div>
          <p className="text mb-40">
            Notero loved from thoudsands customer worldwide and get trusted from
            big companies.
          </p>
          <div className="numbs">
            <div className="num-card">
              <div className="icon img-contain">
                <img src="assets/img/icons/testi_s4_ic1.png" alt="" />
              </div>
              <h2>50K+</h2>
              <p>
                Downloaded and <br /> Installation
              </p>
            </div>
            <div className="num-card">
              <div className="icon img-contain">
                <img src="assets/img/icons/testi_s4_ic2.png" alt="" />
              </div>
              <h2>5.0</h2>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>Based on 1,258 reviews</p>
            </div>
          </div>
          <div className="d-flex align-items-center mt-70">
            <a
              href="https://play.google.com/store/apps/details?id=com.rebliss"
              className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
              target="_blank"
            >
              <small> See Reviews On App Store </small>
            </a>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="testi-cards">
            <div className="client_card">
              <div className="user_img">
                <img src="assets/img/testimonials/user4.png" alt="" />
              </div>
              <div className="inf_content">
                <div className="stars mb-2">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h6>
                  Very good app, Working very fast. It's providing flexibility
                  to work as freelance and providing payment directly on bank
                  account every month.
                </h6>
                <p>
                  Dileep Mishra{" "}
                  <span className="text-muted">
                    freelance<span>Saathi</span>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="client_card">
              <div className="user_img">
                <img src="assets/img/testimonials/user5.png" alt="" />
              </div>
              <div className="inf_content">
                <div className="stars mb-2">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h6>
                  Rebliss is the opportunity that we all need to understand that
                  corporate can be fun. There is no end to growth and learning.
                </h6>
                <p>
                  Shikha Dhyani{" "}
                  <span className="text-muted">
                    <span>Creative Lead</span>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="client_card">
              <div className="user_img">
                <img src="assets/img/testimonials/user6.png" alt="" />
              </div>
              <div className="inf_content">
                <div className="stars mb-2">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h6>
                  “It's a Good Team and an amazing place to work. Give lot of
                  experiences.”{" "}
                </h6>
                <p>
                  Adarsh Dubhey
                  <span className="text-muted">
                    {" "}
                    freelance <span>Saathi</span>{" "}
                  </span>
                </p>
              </div>
            </div>
            <img
              src="assets/img/contact_globe.svg"
              alt=""
              className="testi-globe"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

import React from 'react'

export default function Blog() {
  return (
    <div>
        <section className="blog-slider pt-50 pb-50 style-1">
  <div className="container">
    <div className="section-head text-center mb-60 style-4">
      <h2 className="mb-20">
        {" "}
        Our <span> Journal </span>{" "}
      </h2>
      <div className="text color-666">Work Anytime, Anywhere</div>
    </div>
    <div className="blog-details-slider">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="content-card">
              <div className="img overlay">
                <img src="assets/img/blog/slider1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="content-card">
              <div className="img overlay">
                <img src="assets/img/blog/slider2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="content-card">
              <div className="img overlay">
                <img src="assets/img/blog/slider3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====== pagination ====== */}
      <div className="swiper-pagination" />
      {/* ====== arrows ====== */}
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  </div>
</section>
       
    </div>
  )
}

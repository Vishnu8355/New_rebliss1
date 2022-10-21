import React from 'react'

export default function Culture() {
  return (
    <div>
      <section className="culture section-padding style-5">
        <div className="section-head text-center style-4 mb-60">
          <small className="title_small"> Our Philosophy </small>
          <h2 className="mb-20">
            {" "}
            Discover our <span> Culture </span>{" "}
          </h2>
          <p> More 1500+ Companies &amp; partners trusted &amp; choice reBLISS </p>
        </div>
        <div className="content">
          <div className="culture-slider position-relative pb-80 style-5">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a
                    href="assets/img/about/other21.jpeg"
                    className="culture-card d-block"
                    data-fancybox="gallery"
                  >
                    <img src="assets/img/about/other21.jpeg" alt="" />
                    <span className="overlay" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    href="assets/img/about/other22.jpeg"
                    className="culture-card d-block"
                    data-fancybox="gallery"
                  >
                    <img src="assets/img/about/other22.jpeg" alt="" />
                    <span className="overlay" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    href="assets/img/about/other21.jpeg"
                    className="culture-card d-block"
                    data-fancybox="gallery"
                  >
                    <img src="assets/img/about/other21.jpeg" alt="" />
                    <span className="overlay" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    href="assets/img/about/other21.jpeg"
                    className="culture-card d-block"
                    data-fancybox="gallery"
                  >
                    <img src="assets/img/about/other21.jpeg" alt="" />
                    <span className="overlay" />
                  </a>
                </div>
                <div className="swiper-slide">
                  <a
                    href="assets/img/about/other21.jpeg"
                    className="culture-card d-block"
                    data-fancybox="gallery"
                  >
                    <img src="assets/img/about/other21.jpeg" alt="" />
                    <span className="overlay" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>

    </div>
  )
}

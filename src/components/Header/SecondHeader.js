import React from 'react'

export default function SecondHeader() {
  return (
    <div>
        <header className="style-4">
  <div className="content">
    <div className="container">
      <div className="row gx-0">
        <div className="col-lg-6">
          <div className="info">
            <h1 className="mb-30">
              ONE<span> STOP </span> DESTINATION FOR FREELANCING{" "}
            </h1>
            <p className="text">
              Work Anytime, Anywhere and get Limitless Earning opportunities.
            </p>
            <div className="d-flex align-items-center mt-50">
              <a
                href="https://play.google.com/store/apps/details?id=com.rebliss"
                className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                target="_blank"
              >
                <small>
                  {" "}
                  <i className="fab fa-apple me-2 pe-2 border-end" /> Download
                  App{" "}
                </small>
              </a>
              {/* <a href="https://www.youtube.com/c/reBLISS" data-lity class="play-btn">
                              
                              <span class="icon me-2">
                                  <i class="fas fa-play ms-1"></i>
                              </span>
                              <strong class="small">View <br> Promotion</strong>
                          </a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="img">
            <img src="assets/img/header/header_4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <img
      src="assets/img/header/header_4_bubble.png"
      alt=""
      className="bubble"
    />
  </div>
  <img src="assets/img/header/header_4_wave.png" alt="" className="wave" />
</header>

    </div>
  )
}

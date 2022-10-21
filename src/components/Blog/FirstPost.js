import React from 'react'

export default function firstPost(props) {
  return (
    <div>

     
        <div className="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block">
          <div className="img radius-7 overflow-hidden img-cover">
            <img
              src={props.image}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body px-0">
            <small className="d-block date mt-10 fs-10px fw-bold">
              <a
                href="#"
                className="text-uppercase border-end brd-gray pe-3 me-3 color-blue4"
              >
                {props.new}
              </a>
              <i className="bi bi-clock me-1" />
              <a href="#" className="op-8">
                {props.para}
              </a>
            </small>
            <h5 className="fw-bold mt-10 title">
              <a href="page-single-post-5.html">
                {props.para2}
              </a>
            </h5>
            <p className="small mt-2 op-8 fs-10px">
              {props.para1}
            </p>
            <div className="d-flex small mt-20 align-items-center justify-content-between op-9">
              <div className="l_side d-flex align-items-center">
                <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
                  {props.textA}
                </span>
                <a href="#" className="mt-1">
                  {props.para4}
                </a>
              </div>
              <div className="r-side mt-1">
                <i className="bi bi-chat-left-text me-1" />
                <a href="#">{props.number}</a>
                <i className="bi bi-eye ms-4 me-1" />
                <a href="#">{props.number2}</a>
              </div>
            </div>
          </div>
        </div>
      

    </div>
  )
}

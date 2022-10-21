import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogcard(props) {
  return (
    <div>
        <div className="row gx-4 gx-lg-5">
              <div className="col-lg-8">
                <div className="card border-0 bg-transparent rounded-0 border-bottom brd-gray pb-30 mb-30">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="img img-cover">
                        <img
                         src={props.image}
                          className="radius-7"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="card-body p-0">
                        <small className="d-block date text">
                          <Link
                            to="#"

                            className="text-uppercase border-end brd-gray pe-3 me-3 color-blue4 fw-bold"
                          >
                            {" "}
                            {props.news}{" "}
                          </Link>
                          <i className="bi bi-clock me-1" />
                          <Link
                            to="#" className="op-8">
                            {props.days}
                          </Link>
                        </small>
                        <Link
                          to="#"
                          href="page-single-post-5.html"
                          className="card-title mb-10"
                        >
                          {props.title}
                        </Link>
                        <p className="fs-13px color-666">
                          {props.paragraph}
                        </p>
                        <div className="auther-comments d-flex small align-items-center justify-content-between op-9">
                          <div className="l_side d-flex align-items-center">
                            <span className="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue4 p-2 me-2 text-white">
                              {props.text}
                            </span>
                            <Link
                              to="#">
                              <small className="text-muted">{props.text1}</small> {props.text2}
                            </Link>
                          </div>
                          <div className="r-side mt-1">
                            <i className="bi bi-chat-left-text me-1" />
                            <Link
                              to="#">{props.number1}</Link>
                            <i className="bi bi-eye ms-4 me-1" />
                            <Link
                              to="#">{props.number2}</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

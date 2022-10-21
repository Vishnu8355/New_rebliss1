import React, { useState } from 'react'
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const [option, setOption] = useState();
  const [secondoption, setSecondOption] = useState();


  const buttonup = async () => {

    const regData = {

      name,
      email,
      phone,
      website,
      option,
      secondoption
    }

    const apidata = await axios.post("https://workit-apis.herokuapp.com/api/users/reg", regData)

    console.log(apidata.data);
  }

  return (
    <div>
      <main className="contact-page style-5">
        {/* ====== start contact page ====== */}
        <section className="community section-padding style-5">
          <div className="container">
            <div className="section-head text-center style-4 mb-40">
              <small className="title_small">Contact us</small>
              <h2 className="mb-20">
                Get In <span> Touch </span>{" "}
              </h2>
              <p>We will contact again after receive your request in 24h</p>
            </div>
            <div className="content rounded-pill">
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src="assets/img/icons/mail3d.png" alt="" />
                </div>
                <div className="inf">
                  <h5>customercare@rebliss.in </h5>
                </div>
              </div>
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src="assets/img/icons/map3d.png" alt="" />
                </div>
                <div className="inf">
                  <h5>
                    Kutumbh Care Pvt Ltd, B 154, B Block, Sector 63, Noida, Uttar
                    Pradesh 201301
                  </h5>
                </div>
              </div>
              <div className="commun-card">
                <div className="icon icon-45">
                  <img src="assets/img/icons/msg3d.png" alt="" />
                </div>
                <div className="inf">
                  <h5>+91 9289046988</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact section-padding pt-0 style-6">
          <div className="container">
            <div className="content">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form
                    action="https://smartinnovates.com/items/iteck/html/contact.php"
                    className="form"
                    method="post"
                  >
                    <p className="text-center text-danger fs-12px mb-30">
                      The field is required mark as *
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email Address *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number (option)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-20">
                          <input
                            onChange={(e) => setWebsite(e.target.value)}
                            type="text"
                            name="website"
                            className="form-control"
                            placeholder="Your Website (option)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-20">
                          <select name="option" className="form-select">
                            <option value="how can we help" selected="">
                              How can we help you?
                            </option>
                            <option value="option 1" onChange={(e) => setOption(e.target.value)}>option 1</option>
                            <option value="option 2" onChange={(e) => setSecondOption(e.target.value)}>option 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            rows={10}
                            className="form-control"
                            placeholder="How can we help you?"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <div className="form-check d-inline-flex mt-30 mb-30">
                          <input
                            className="form-check-input me-2 mt-0"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label small"
                            htmlFor="flexCheckDefault"
                          >
                            By submitting, i’m agreed to the{" "}
                            <a href="#" className="text-decoration-underline">
                              Terms &amp; Conditons
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button
                          onClick={(e) => buttonup()}
                          type="button"
                          defaultValue="Send Your Request"
                          className="btn rounded-pill bg-blue4 fw-bold text-white text-light fs-12px"
                        >Submit Here</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <img
                src="assets/img/icons/contact_a.png"
                alt=""
                className="contact_a"
              />
              <img
                src="assets/img/icons/contact_message.png"
                alt=""
                className="contact_message"
              />
            </div>
          </div>
        </section>
        {/* ====== end contact page ====== */}
        {/* ====== start contact page ====== */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.492531640317!2d77.3764501145226!3d28.614996991626377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45910a1740b%3A0x7d2bad510f108c8d!2sKutumbh%20Care%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1660641334744!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* ====== start contact page ====== */}
      </main>

    </div>
  )
}

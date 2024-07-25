import Head from "next/head";
import { useState } from "react";

function contactus() {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(initialState);

  const { name, email, phoneNumber, subject, message } = values;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("values", values);
    const data = {
      service_id: "gmail",
      template_id: "template_lblai0z",
      user_id: "user_mEWvBp6teHQpXmSA2yZ19",
      template_params: values,
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    alert("Thank you for contacting us, we will get back to you.");

    setValues(initialState);
  };

  return (
    <div>
      <Head>
        <title>Contact | M.V.M Higher Secondary School</title>
        <meta
          name="description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta
          property="og:description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta
          name="twitter:description"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta property="og:image" content="/images/favicon/favicon-32x32.png" />
        <meta
          name="twitter:image"
          content="/images/favicon/favicon-32x32.png"
        />
        <meta name="twitter:card" content="/images/favicon/favicon-32x32.png" />
        <meta
          property="article:section"
          content="Assabah Association Trust is a well organized and established non-profit organization, under Muslim management. The trust is managing number of educational institutions. M.V.M.R.H.S.S founded in 1986 under Assabah Association Trust. School provides quality education for all community with affordable cost. Now the school has grown to a full fledged Higher Secondary School starting from K.G. to Higher Secondary level with reorganization of government of Kerala."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.mvmrhss.com/" />
        <meta
          property="og:title"
          content="M.V.M Higher Secondary School"
        ></meta>
      </Head>
      <section
        className="page-title"
        style={{ background: "url(images/school_images/contactus.jpg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>contact us</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>contact us</li>
          </ul>
        </div>
      </section>

      <section className="contact-section sp-ten">
        <div className="container">
          <div className="contact-area">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="left-side">
                  <div className="text-title">
                    <h5>Communicate with us</h5>
                  </div>
                  <div className="social-links">
                    <div
                      className="item"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="icon-box">
                        <i
                          style={{ color: "#fff", fontSize: "22px" }}
                          className="fas fa-home"
                        ></i>
                      </div>
                      <div className="icon-text">
                        <p>
                          Valayamkulam,
                          <span style={{ display: "block" }}>
                            {" "}
                            P.O Kokoor Malappuram ,
                          </span>
                          Kerala
                        </p>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="icon-box">
                        <i
                          style={{ color: "#fff", fontSize: "22px" }}
                          className="fas fa-phone"
                        ></i>
                      </div>
                      <div className="icon-text">
                        <p>
                          +919567871424
                          <br />
                          +917593078368
                        </p>
                      </div>
                    </div>
                    <div
                      className="item"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="icon-box">
                        <i
                          className="fas fa-envelope"
                          style={{ color: "white" }}
                        ></i>
                      </div>
                      <div className="icon-text">
                        <p>info@mvmrhss.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="right-side">
                  <div className="text-title">
                    <h5>Contact form</h5>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name *"
                            required
                            onChange={(e) =>
                              setValues({ ...values, name: e.target.value })
                            }
                            value={name}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={(e) =>
                              setValues({ ...values, email: e.target.value })
                            }
                            placeholder="Your Email *"
                            required
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phoneNumber"
                            className="form-control"
                            onChange={(e) =>
                              setValues({
                                ...values,
                                phoneNumber: e.target.value,
                              })
                            }
                            placeholder="Your Phone Number *"
                            required
                            value={phoneNumber}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            onChange={(e) =>
                              setValues({ ...values, subject: e.target.value })
                            }
                            placeholder="Subject *"
                            required
                            value={subject}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-sm-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control textarea required"
                            required
                            placeholder="Type Your Message Here . . ."
                            onChange={(e) =>
                              setValues({ ...values, message: e.target.value })
                            }
                            value={message}
                          ></textarea>
                        </div>
                        <div className="form-group form-bottom">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            value=""
                          />
                          <button
                            className="thm-btn bg-clr1"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="map-area my-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31359.90365346875!2d76.03945759899267!3d10.735411299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bf237d6b5f7f%3A0xeacbf498dca297b!2sMVMR%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1618925996989!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contactus;

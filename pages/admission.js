import axios from "axios";
import Head from "next/head";
import { useState } from "react";

function admission() {

  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(initialState);

  const { name, email, phoneNumber, subject, message } = values;

  const [studentName, setStudentName] = useState()
  const [guardianName, setGuardianName] = useState()
  const [adress, setAdress] = useState();
  const [dob, setDob] = useState()
  const [Adhar, setAdhar] = useState()
  const [studentPhoneNumber, setStudentPhoneNumber] = useState()






  const handleFormSubmit = (e) => {
    // e.preventDefault();
    // // console.log("values", values);
    // const data = {
    //   service_id: "gmail",
    //   template_id: "template_lblai0z",
    //   user_id: "user_mEWvBp6teHQpXmSA2yZ19",
    //   template_params: values,
    // };

    // fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );

    // alert("Thank you for contacting us, we will get back to you.");

    // setValues(initialState);
    // alert('/////////////')

    e.preventDefault();

    const data = {
      Name: studentName,
      Gardion: guardianName,
      // Email: studentEmail,
      Phone: studentPhoneNumber,
      Adress: adress,
      DOB: dob,
      Adhar: Adhar
    }

    axios.post('https://sheet.best/api/sheets/aef03dc8-ef15-48e0-b6bb-ea7881275f7d', data).then((res) => {
      alert("Succesfully registered")
    })

    // console.log("..............", data);
    setStudentName('')
    setGuardianName('')
    setAdress('')
    setDob('')
    setAdhar('')
    setStudentPhoneNumber('')
  };

  return (
    <div>
      <Head>
        <title>Admission | M.V.M Higher Secondary School</title>
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
        style={{ background: "url(/images/resources/page-title.jpg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>Admission</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>Admission</li>
          </ul>
        </div>
      </section>

      <section className="blog-single-section  py-5">
        <div className="admissionContainer">
          <div className="container">
            <h3>
              <b>
                All admission are strictly based on admission test except K.G
                admission
              </b>
            </h3>
            <ol className="mt-3">
              <li>Pupil should produce their T.C at the time of admission.</li>
              <li>
                K.G and first standard pupil should produce their birth
                certificate at the time of admission.
              </li>
              <li>
                All admissions are provisional but principal has a right to
                cancel any admission at any time.
              </li>
              <li>
                Higher secondary admission will start only after publishing SSLC
                result as per government notification.
              </li>
            </ol>
          </div>

          <div className="admissionFormContainer container">
            <p>
              കുട്ടികൾ സ്വയം പര്യാപ്തരായി വെല്ലുവിളികളെ അതിജീവിച്ചു വളരാൻ നൂതന
              കാലത്തിന്റെ വിദ്യാഭ്യാസം ഇനി സ്കൂൾ ഒന്നിച്ച് നിങ്ങളുടെ പഠന
              മുറിയിലേക്ക്.
            </p>
            <ul>
              <li>📝 കേം ബ്രിഡ്ജ് ഇംഗ്ളീഷ് പരിശീലന പരിപാടി.</li>
              <li>
                {" "}
                💡 Special Coaching for NTSC & ISRO Young Scientist Program
              </li>
              <li> 🦾 റോബോട്ടിക്‌സ് പാഠ്യ പദ്ധതി.</li>
              <li>
                {" "}
                🧮 ഇ-ക്യാമ്പസ്, ഐഡിയ ഫാക്ടറി തുടങ്ങിയ അന്താരാഷ്ട്ര സംവിധാനങ്ങൾ.{" "}
              </li>
              <li> 🔖 ധാർമികതയിൽ അധിഷ്ഠിതമായ റസിഡൻഷ്യൽ ക്യാമ്പസ്. </li>
              <li> 💸 NO DONATION</li>
              <li> 💡 MVM EMBEDDED EDU APP</li>
              <li>🎈 IAS Orientation</li>
            </ul>





            <section className="contact-section sp-ten">
              <div className="container">
                <div className="contact-area">
                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <div className="right-side">

                        <form >
                          <div className="row clearfix">
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Student Name *"
                                  required
                                  onChange={(e) =>
                                    setStudentName(e.target.value)
                                  }
                                // value={name}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  onChange={(e) =>
                                    setGuardianName(e.target.value)
                                  }
                                  placeholder="Guardian Name *"
                                  required
                                // value={email}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                <input
                                  type="date"
                                  name="email"
                                  className="form-control"
                                  onChange={(e) =>
                                    setDob(e.target.value)
                                  }
                                  placeholder="DOB *"
                                  required
                                // value={email}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  onChange={(e) =>
                                    setAdhar(e.target.value)
                                  }
                                  placeholder="Adhar card number *"
                                  required
                                // value={email}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group">
                                <input
                                  type="number"
                                  name="phoneNumber"
                                  className="form-control"
                                  onChange={(e) =>
                                    setStudentPhoneNumber(e.target.value)
                                  }
                                  placeholder="Your Phone Number *"
                                  required
                                // value={phoneNumber}
                                />
                              </div>
                            </div>

                            <div className="col-xl-12 col-sm-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control textarea required"
                                  required
                                  placeholder="Adress"
                                  onChange={(e) =>
                                    setAdress(e.target.value)
                                  }
                                // value={message}
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
                                  // type="submit"
                                  data-loading-text="Please wait..."
                                  onClick={handleFormSubmit}
                                >
                                  SUBMIT
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


































            <p className="moreInformation">
              തുടങ്ങി ഒട്ടേറെ സൗകര്യങ്ങൾ കൂടുതൽ വിവരങ്ങൾക്ക് :<br />
              <strong className="my-5">9895413809 (Dept.of Al-Manar), </strong>
              <br />
              <strong>9567871424, 7593078368.</strong>
            </p>
          </div>

          <div className="imgContainer">
            <div className="moto">
              <h1>
                <span>MOTTO</span>
              </h1>
              <ol>
                <li>Create better result with quality education</li>
                <li>Provide general education with affordable cost</li>
                <li>Provide moral education along with school education</li>
                <li>Provide Islamic education along with school education</li>
                <li>Social and cultural development of pupil</li>
                <li>Provide special training for physical development</li>
                <li>Provide special coaching for artistic development</li>
              </ol>
            </div>
          </div>
          <div className="container">
            <h3 className="mt-4">
              <b>Hostel Admission procedure</b>
            </h3>
            <ol className="mt-3">
              <li>
                Who want hostel admission they want to submit an application in
                prescribed form in our school office
              </li>
              <li>
                If any pupil violate the rules and regulations of school,that
                pupil both admission may be cancelled at any time
              </li>
              <li>Hostel admission available from 5th standard onwards</li>
              <li>
                Separate hostel for both boys and girls are functioning in the
                campus. Special coaching programme are arranged for hostel
                student for physical, cultural and moral development of the
                pupil. The hostel mess is non vegetarian, in no case outside
                food is allowed.
              </li>
              <li>
                The parents are allowed to visit their ward in the hostel only
                on holidays
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default admission;


// <div className="onlineRegisterLink">
//   <a href="https://forms.gle/WUcLa5varuDuC7hB6">
//     Online Registeration
//   </a>
// </div>
import Head from "next/head";
import { useState } from "react";
import facilityLists from "../util/facilityList";

function facilities() {
  const [showModal, setShowModal] = useState("");

  return (
    <div>
      <Head>
        <title>Facilities | M.V.M Higher Secondary School</title>
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
        style={{
          background: "url(/images/resources/facilities.jpg)",
        }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>Facilities</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>Facilities</li>
          </ul>
        </div>
      </section>

      <div
        style={{
          color: "black",
          paddingTop: "40px",
          paddingBottom: "40px",
          fontWeight: "100px",
          fontSize: "130%",
          lineHeight: "40px",
        }}
      >
        <div className="container">
          <div
            style={{
              color: "black",
              paddingTop: "40px",
              paddingBottom: "40px",
              fontWeight: "100px",
              fontSize: "1rem",
              lineHeight: "40px",
            }}
          >
            <div className="row align-items-center py-4">
              <div className="col-md-6">
                <img
                  src="/images/school_images/slider1.jpg"
                  alt="facilitiesImg"
                  width="100%"
                />
              </div>
              <ul className="col-md-6">
                <li>•&nbsp;Focus on value education</li>
                <li>•&nbsp;Separate Hostel for girls and boys</li>
                <li>
                  •&nbsp;Eminent scholars give moral classNamees for the
                  students
                </li>
                <li>
                  •&nbsp;A well furnished prayer hall/masjid as functioning in
                  the campus
                </li>
                <li>
                  •&nbsp;Provides a spacious play ground for our student to
                  engage in sports and game
                </li>
                <li>
                  •&nbsp;Various educational clubs such as social club,
                  mathematics club, science club and language club are smoothly
                  functioning in our school
                </li>
              </ul>
            </div>
          </div>

          <div className="row facilityGalleryContainer">
            {facilityLists.map((facility, i) => (
              <div className=" col-lg-4 col-md-6 mb-4" key={facility.id}>
                <div className="facilitiesCard bg-white rounded ">
                  <div className="cardTopImg">
                    <img
                      src={facility.img}
                      alt={facility.title}
                      className="img-fluid card-img-top"
                    />
                  </div>
                  <div className="py-2 px-4">
                    <h5>
                      {" "}
                      <a href="#" className="text-dark">
                        {facility.title}
                      </a>
                    </h5>
                    <p className="small text-muted mb-0">
                      {facility.shortDesc}
                    </p>
                    <div
                      onClick={() => setShowModal(facility.title)}
                      className="btn-primary btn-primary badge badge-primary px-3 rounded-pill font-weight-normal"
                    >
                      {facility.description ? "Read More" : null}
                    </div>
                  </div>
                </div>

                <div
                  id="myModal1"
                  className={
                    showModal === facility.title
                      ? "modal fade show"
                      : "modal fade"
                  }
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          {facility.title}
                        </h5>
                        <button
                          type="button"
                          className="close btn btn-danger"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={() => setShowModal("")}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body row">
                        <div className="col-md-6">
                          <div className="modalImgContainer">
                            <img
                              src={facility.img}
                              className="img-fluid"
                              alt={facility.title}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 py-4">
                          <p>
                            {facility.description ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: facility.description,
                                }}
                              ></div>
                            ) : null}

                            {/* {facility.description ? facility.description : null} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded ">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      ACTIVITIES
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Admissions are granted in class VI, VII, VIII & IX through
                    an all India level entrance examination. Admission to
                    className XI is based on the availability of ...
                  </p>
                  <div className="btn-primary btn-primary badge badge-primary px-3 rounded-pill font-weight-normal">
                    Read More
                  </div>
                </div>
              </div>

              <div id="myModal1" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Activities
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body row">
                      <div className="col-md-6">
                        <img
                          src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          Admissions are granted in classNamees VI, VII, VIII &
                          IX through an all India level entrance examination.
                          Admission to className XI is based on the availability
                          of seats. The selection criteria include className 10
                          Board Examination result and performance in the
                          school's internal admission procedure. The applicant
                          should not have completed eleven/ twelve/
                          thirteen/fourteen/sixteen years on 1st January of the
                          year in which admission is sought for these
                          classNamees. The boys are not permitted to remain in
                          the School after completion of their 18th year, nor
                          after failure in any className for two consecutive
                          years. The boys are also not permitted to remain in
                          the School on failing a public examination class.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      COMPUTER LAB / SMART ROOM
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Well equipped computer lab provide the necessary aid in
                    learning various subject.computer lab facilities are
                    available to all students from 3rd standard to 12th standard
                    ...
                  </p>
                  <div
                    className="btn-primary btn-primary badge badge-primary px-3 rounded-pill font-weight-normal"
                    data-toggle="modal"
                    data-target="#myModal2"
                  >
                    Read More
                  </div>
                </div>
              </div>

              <div id="myModal2" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        COMPUTER LAB / SMART ROOM
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body row">
                      <div className="col-md-6">
                        <img
                          src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          Well equipped computer lab provide the necessary aid
                          in learning various subject.computer lab facilities
                          are available to all students from 3rd standard to
                          12th standard.in high school section IT classNamees
                          are functioning based on programme scheduled by “IT @
                          school”.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      LIBRARY
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    The school maintains a well stocked library with over 5000
                    books. The library subscribes various periodical and news
                    papers also....
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      PRAYER HALL / MASJID
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    A well furnished Prayer hall/Masjid is functioning in the
                    campus to provide training in Islamic subject. Eminent
                    scholars give moral classNamees for the students.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      TRANSPORTATIONS
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    The school provides bus service facilities to pick up and
                    drop students at designated location. The bus routes are
                    already specified, therefore the parent for whom the route
                    are inconvenient are advised to bring and collect their
                    children.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      CLUB ACTIVITIES
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Various educational clubs such as social club, mathematics
                    club, science club language cluband Natural Club are
                    smoothly functioning in our school.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      SCOUT AND GUIDE
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    A well trained scout and guide team is functioning in the
                    campus under the guidance and supervision of well trained
                    scouts and guide teachers.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt="card-img"
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      HOSTEL
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Separate hostel for both boys and girls are functioning in
                    the campus. Special coaching programme arranged ...
                  </p>
                  <div
                    className="btn-primary badge badge-primary px-3 rounded-pill font-weight-normal"
                    data-toggle="modal"
                    data-target="#myModal3"
                  >
                    Read More
                  </div>
                </div>
              </div>

              <div id="myModal3" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        HOSTEL
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body row align-items-center">
                      <div className="col-md-6">
                        <img
                          src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>HOSTEL FACILITIES</b>
                          <br />
                          Separate hostel for both boys and girls are
                          functioning in the campus. Special coaching programme
                          arranged for hostel student for physical, cultural and
                          moral development of the pupil. The hostel mess is non
                          vegetarian, in no case outside food is allowed in the
                          hostel. Parents are allowed to visit their ward in the
                          hostel only on holidays.
                          <br />
                          <b style={{ display: "block", marginTop: "20px" }}>
                            HOSTEL ADMISSION
                          </b>
                          <ol>
                            <li>
                              {" "}
                              Who want hostel admission they want to submit an
                              application in prescribed form in our school
                              office.
                            </li>
                            <li>
                              {" "}
                              If any pupil violate the rules and regulations of
                              school,that pupil both admission may be cancelled
                              at any time.
                            </li>
                            <li>
                              {" "}
                              Hostel admission available from 5th standard
                              onwards
                            </li>
                          </ol>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      UNIFORM
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    STATUS OF UNIFORM : High school, Lower Primary and Upper
                    Primary Section BOYS: Check shirt coffee brown pants GIRLS:
                    Check terry cotton shirt...
                  </p>
                  <div
                    className="btn-primary badge badge-primary px-3 rounded-pill font-weight-normal"
                    data-toggle="modal"
                    data-target="#myModal4"
                  >
                    Read More
                  </div>
                </div>
              </div>

              <div id="myModal4" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Activities
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body row">
                      <div className="col-md-6">
                        <img
                          src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-6">
                        <p>
                          Admissions are granted in classNamees VI, VII, VIII &
                          IX through an all India level entrance examination.
                          Admission to className XI is based on the availability
                          of seats. The selection criteria include className 10
                          Board Examination result and performance in the
                          school's internal admission procedure. The applicant
                          should not have completed eleven/ twelve/
                          thirteen/fourteen/sixteen years on 1st January of the
                          year in which admission is sought for these
                          classNamees. The boys are not permitted to remain in
                          the School after completion of their 18th year, nor
                          after failure in any className for two consecutive
                          years. The boys are also not permitted to remain in
                          the School on failing a public examination className
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      SCHOOL STORE
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    The school maintains a full fledged store for our student.
                    The school store provides all text books, notebooks, uniform
                    materials and other stationary items.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      SCIENCE LABOROTORIES
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    Various well equipped Physics, Chemistry, Biology and
                    Mathematics laboratories also provide aid for learning.
                  </p>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="facilitiesCard bg-white rounded shadow-sm">
                <div className="cardTopImg">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt=""
                    className="img-fluid card-img-top"
                  />
                </div>
                <div className="py-2 px-4">
                  <h5>
                    {" "}
                    <a href="#" className="text-dark">
                      SPORTS / PLAY GROUNDS
                    </a>
                  </h5>
                  <p className="small text-muted mb-0">
                    M.V.M.R.H.S.S provides a spacious play ground for our
                    student to engage in sports and game.
                  </p>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default facilities;

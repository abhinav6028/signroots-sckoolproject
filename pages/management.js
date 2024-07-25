import Head from "next/head";

function management() {
  return (
    <div>
      <Head>
        <title>Management | M.V.M Higher Secondary School</title>
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
        style={{ background: " url(/images/resources/management.jpg)" }}
      >
        <div className="container clearfix">
          <div className="title pull-left">
            <h2>Management</h2>
          </div>
          <ul className="title-manu pull-right">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </li>
            <li>Management</li>
          </ul>
        </div>
      </section>

      <div
        className="container managementContainer"
        style={{
          color: "black !important",
          padding: "60px 10px",
          fontWeight: "100px",
          lineHeight: "40px",
          width: "80%",
          textAlign: "center",
        }}
      >
        <p>
          The management of school vested in the hands of managing committee.
          the managing committee consist of the following members
        </p>

        <div className="row mt-5">
          <div className=" col-md-3 mb-5 align-center">
            <div className="facilitiesCard managementCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/chairman.jpg"
                  alt="Chairman"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Chairman</b>
                </h6>
                <p className="mb-0 text-muted">Abdul Azeez K P</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/president.jpg"
                  alt="President"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>President</b>
                </h6>
                <p className="mb-0 text-muted">Basheer Pallikkara</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/vice_president.jpg"
                  alt="Vice President"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Vice President</b>
                </h6>
                <p className="mb-0 text-muted">Mohammadunni Haji</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/general_secretary1.jpg"
                  alt="General Secretary"
                  className="img-fluid card-img-top"
                  style={{ transform: "scale(1.25)" }}
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>General Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Kunjimohammed Panthavoor</p>
              </div>
            </div>
          </div>

          {/* <div className=" col-md-3 mb-5 align-center">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/education_secretary.jpg"
                  alt="Educational Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Educational Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Mohammedkutty M K</p>
              </div>
            </div>
          </div> */}

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/secretary.jpg"
                  alt="Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Secretary</b>
                </h6>
                <p className="mb-0 text-muted">N Hameed Kokkur</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/secretary_2.jpg"
                  alt="Secretary"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Secretary</b>
                </h6>
                <p className="mb-0 text-muted">Moosakutty V V</p>
              </div>
            </div>
          </div>

          <div className=" col-md-3 mb-5">
            <div className="facilitiesCard managementCard bg-white rounded shadow-sm">
              <div className="cardTopImg">
                <img
                  src="/images/school_images/treasurer.jpg"
                  alt="Treasurer"
                  className="img-fluid card-img-top"
                />
              </div>
              <div className="p-2 text-center">
                <h6>
                  {" "}
                  <b>Treasurer</b>
                </h6>
                <p className="mb-0 text-muted">Salih M V</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default management;

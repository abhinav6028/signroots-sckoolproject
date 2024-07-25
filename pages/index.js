import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { store } from "../firebaseConfig";
import NewsPost from "../components/NewsPost";

export default function Home() {
  const [realtimePosts, loading, error] = useCollection(
    store.collection("news").orderBy("createdAt", "desc")
  );

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-arrow-right"></i>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-arrow-left"></i>
      </div>
    );
  }

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>M.V.M Higher Secondary School</title>
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
      <section className="sliderContainer">
        <Slider {...settings}>
          <div className="sliderSlide">
            <div className="sliderSlideContainer">
              <img src="/images/school_images/slider1.jpg" alt="img" />
              <div className="sliderLinks">
                <h2>M.V.M Higher Secondary School</h2>
                <div className="link-box">
                  <a href="/about" className="btn1">
                    Know More
                  </a>{" "}
                  <Link href="/contactus" className="btn2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sliderSlide">
            <div className="sliderSlideContainer">
              <img src="/images/school_images/slider2.jpg" alt="img" />
              <div className="sliderLinks">
                <h2>M.V.M Higher Secondary School</h2>
                <div className="link-box">
                  <Link href="/about" className="btn1">
                    Know More
                  </Link>{" "}
                  <Link href="/contactus" className="btn2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sliderSlide">
            <div className="sliderSlideContainer">
              <img src="/images/school_images/slider3.jpg" alt="img" />
              <div className="sliderLinks">
                <h2>M.V.M Higher Secondary School</h2>
                <div className="link-box">
                  <Link href="/about" className="btn1">
                    Know More
                  </Link>{" "}
                  <Link href="/contactus" className="btn2">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="welcome-section mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-sm-12">
              <div className="wellcome-left-colmun">
                <div className="sec-title pb-one">
                  <h4>M.V.M Higher Secondary School</h4>
                </div>
                <div className="content-text">
                  <p className="forjust">
                    Assabah Association Trust is a well organized and
                    established non-profit organization, under Muslim
                    management. The trust is managing number of educational
                    institutions. M.V.M.R.H.S.S founded in 1986 under Assabah
                    Association Trust. School provides quality education for all
                    community with affordable cost. Now the school has grown to
                    a full fledged Higher Secondary School starting from K.G. to
                    Higher Secondary level with reorganization of government of
                    Kerala.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-xs-12">
              <div className="image-box">
                <figure>
                  <img
                    src="/images/school_images/home-banner6.jpg"
                    alt="M.V.M Higher Secondary School"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visionMission py-5 mb-5">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-xl-7 col-lg-12 col-sm-12">
              <div className="wellcome-left-colmun">
                <div className="sec-title pb-one">
                  <h4>Vision And Mission</h4>
                </div>
                <div className="content-text">
                  <p className="forjust">
                    The vision of M.V.M.R.H.S.S is that to provide quality
                    education for all pupil with affordable cost Mission of
                    M.V.M.R.H.S.S is that provide education for all religious
                    group without considering the cast and creed. School
                    provides education for all religious groups, such as Hindu,
                    Muslim, and Christian etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-xs-12">
              <div className="image-box">
                <figure>
                  <img
                    src="/images/school_images/5.jpg"
                    alt="M.V.M Higher Secondary School"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsContainer py-5 mb-5">
        <div className="container">
          <div className="row  align-items-start">
            <div className="col-xl-6 col-lg-12 col-xs-12">
              <div className="sec-title pb-one">
                <h4>Latest News</h4>
              </div>
              <div
                className="newContainer border shadow-sm rounded "
                style={{
                  maxHeight: "48vh",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                {realtimePosts &&
                  realtimePosts.docs.map((news, i) => (
                    <NewsPost
                      key={news.id}
                      title={news.data().newsTitle}
                      description={news.data().newsDescription}
                      createdAt={news.data().createdAt}
                    />
                  ))}
              </div>

              {/* {realtimePosts &&
                realtimePosts.docs.map((post) => console.log(post.id))} */}
            </div>
            <div className="col-xl-6 col-lg-12 col-sm-12">
              <div className="left-colmun">
                <div className="content-text">
                  <div className="image-box">
                    <figure>
                      <img
                        src="/images/school_images/slider2.jpg"
                        alt="M.V.M Higher Secondary School"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



// <footer className="main-footer bg-four sp-one">
//   <div className="container">
//     <div className="row">
//       <div className="col-xl-4 col-lg-6 col-sm-12 footer-colmun">
//         <div className="footer-clomun footer-about-widget">
//           <div className="footer-logo"></div>
//           <p>
//             Thank you for visiting our Website.
//             <br />
//             Follow us on these platforms to stay updated.
//           </p>
//           <ul className="social-links d-flex flex-column">
//             <li>
//               <a href="http://www.facebook.com/pages/mvm-school-valayamkulam/127619727249501">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//             </li>
//             <li className="mt-3">
//               <a href="https://play.google.com/store/apps/details?id=com.mvm.parents&hl=en_IN&gl=US">
//                 <img
//                   src="./images/school_images/google-play-png-logo-3799 (1).png"
//                   alt="app-store"
//                 />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="col-xl-2 col-lg-6 col-sm-12 footer-colmun">
//         <div className="footer-clomun footer-menu-link">
//           <div className="sec-title-one pb-one">
//             <h6>Useful Links</h6>
//           </div>
//           <ul>
//             <li>
//               <Link href="/">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>
//                   Home
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>
//                   About Us
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/facilities">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>{" "}
//                   Facilities
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/management">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>{" "}
//                   Management
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/curriculum">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>{" "}
//                   Curriculum
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/admission">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>{" "}
//                   Admission
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contactus">
//                 <a>
//                   <i
//                     className="fa fa-arrow-circle-right"
//                     aria-hidden="true"
//                   ></i>{" "}
//                   Contact Us
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="col-xl-4 col-lg-6 col-sm-12 footer-colmun">
//         <div className="footer-clomun footer-gallery-widget">
//           <div className="social-links">
//             <div
//               className="footerRow"
//               style={{ display: "flex", alignItems: "center" }}
//             >
//               <div className="footrAddress">
//                 <div className="sec-title-one pb-one">
//                   <h6>Address</h6>
//                 </div>
//                 <div
//                   className="item"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   <div className="icon-box"></div>
//                   <div className="icon-text">
//                     <p>
//                       Valayamkulam,
//                       <span style={{ display: "block" }}>
//                         {" "}
//                         P.O Kokoor Malappuram ,
//                       </span>
//                       Kerala
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="phoneAddress ms-5">
//                 <div className="sec-title-one pb-one">
//                   <h6>Phone</h6>
//                 </div>
//                 <div
//                   className="item"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   <div className="icon-box">
//                     {/* <i className="fas fa-phone"></i> */}
//                   </div>
//                   <div className="icon-text">
//                     <p>
//                       +919567871424
//                       <br />
//                       +917593078368
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="sec-title-one pb-one">
//               <h6>E-mail</h6>
//             </div>
//             <div
//               className="item"
//               style={{ display: "flex", alignItems: "center" }}
//             >
//               <div className="icon-box">
//                 <i
//                   className="fas fa-envelope"
//                   style={{ color: "white" }}
//                 ></i>
//               </div>
//               <div className="icon-text pl-2">
//                 <p className="mb-0 " style={{ marginLeft: "5px" }}>
//                   <a
//                     style={{ color: "#777777" }}
//                     href="mailto:info@mvmrhss.com"
//                   >
//                     info@mvmrhss.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const [isScroll, setScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState("");

  const handleScroll = (e) => {
    let windoScrollY = window.scrollY;
    let changeScrollY = 100;
    if (windoScrollY > changeScrollY) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleScreensize = (e) => {
    if (window.innerWidth < 800) {
      setShowNavbar("navbar-collapse collapse clearfix");
    } else if (window.innerWidth > 800) {
      setShowNavbar("navbar-collapse collapse clearfix show");
    }
  };

  const handleNavBtn = () => {
    if (
      showNavbar === "navbar-collapse collapse clearfix show" &&
      window.innerWidth < 800
    ) {
      setShowNavbar("navbar-collapse collapse clearfix");
    } else {
      setShowNavbar("navbar-collapse collapse clearfix show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (window.innerWidth < 800) {
      setShowNavbar("navbar-collapse collapse clearfix");
    } else if (window.innerWidth > 800) {
      setShowNavbar("navbar-collapse collapse clearfix show");
    }
    window.addEventListener("resize", handleScreensize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScreensize);
    };
  }, []);

  return (
    <header className="main-header">
      <header className="header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-12">
              <div className="header-logo">
                <Link href="/">
                  <img
                    src="/images/favicon/android-chrome-512x512.png"
                    alt="school_logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12">
              <div className="header-contact-info">
                <ul>
                  <li>
                    <div className="iocn-holder">
                      <i className="fas fa-home"></i>
                    </div>
                    <div className="text-holder">
                      <strong>ADDRESS:</strong>
                      <p>Valayamkulam, P.O Kokoor Malappuram, Kerala</p>
                    </div>
                  </li>
                  <li>
                    <div className="iocn-holder">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="text-holder">
                      <strong>PHONE:</strong>
                      <p>+919567871424,+917593078368</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        className={
          isScroll
            ? "main-menu-one stricky stricky-fixed"
            : "main-menu-one stricky "
        }
      >
        <div className="container">
          <div className="menu-style-one clearfix">
            <nav className="main-menu">
              <div className="navbar-header">
                <button
                  type="button"
                  onClick={handleNavBtn}
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className={showNavbar} id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li
                    className={
                      router.pathname == "/" ? "current activeLink" : "current"
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/">

                      <i className="fa fa-home" aria-hidden="true"></i>Home

                    </Link>
                  </li>

                  <li
                    className={router.pathname == "/about" ? "activeLink" : ""}
                    onClick={handleNavBtn}
                  >
                    <Link href="/about">About Us</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/facilities" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/facilities">Facilities</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/management" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/management">Management</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/curriculum" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/curriculum">Curriculum</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/gallery" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/admission" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/admission">Admission</Link>
                  </li>
                  <li
                    className={
                      router.pathname == "/contactus" ? "activeLink" : ""
                    }
                    onClick={handleNavBtn}
                  >
                    <Link href="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </header>

  );
}

export default Header;

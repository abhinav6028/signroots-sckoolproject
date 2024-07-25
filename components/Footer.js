function Footer() {
  return (
    <section className="footer-bottom bg-three">
      <div className="container">
        <div className="bottom-text text-center">
          <p>
            &copy;{new Date().getFullYear()} M V M Residential Higher Secondary
            School. All rights reserved.
            <br /> Powered by
            <strong>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "3px",
              }}
              href="https://signroots.com"
            >
              signrOots Technologies
              </a>
              </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

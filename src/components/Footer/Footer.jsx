import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-brand">
          <h2>Netplus Broadband</h2>

          <p>
            Connecting Punjab with lightning-fast broadband,
            IPTV and digital entertainment for homes and businesses.
          </p>

          <div className="social-icons">
            {/* We'll add icons later */}
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">

        <div className="footer-column">
          <h3>Company</h3>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Jujhar Group | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;
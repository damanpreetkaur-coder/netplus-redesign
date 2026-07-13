import "./Broadband.css";
import BroadbandPlans from "../../components/BroadbandPlans/BroadbandPlans";
import FAQ from "../../components/FAQ/FAQ";
function Broadband() {
  return (
    <>
      <section className="broadband-hero">

        <div className="hero-left">

          <span className="hero-tag">
            ⚡ High-Speed Broadband
          </span>

          <h1>
            Experience Lightning Fast Internet
          </h1>

          <p>
            Enjoy unlimited data, ultra-fast speeds up to
            <strong> 1 Gbps </strong>
            and seamless connectivity for gaming,
            streaming, work and everything in between.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Plans
            </button>

            <button className="secondary-btn">
              Get Connection
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="src/assets/images/broadband.png"
            alt="Broadband"
          />

        </div>

      </section>
      <section className="why-broadband">

  <div className="section-title">

    <span>Why Choose Us</span>

    <h2>Why Choose Netplus Broadband?</h2>

    <p>
      Get uninterrupted internet with blazing-fast speeds,
      unlimited data and reliable customer support.
    </p>

  </div>

  <div className="feature-grid">

    <div className="feature-card">

      <div className="feature-icon">⚡</div>

      <h3>Up to 1 Gbps Speed</h3>

      <p>
        Enjoy ultra-fast internet for gaming,
        streaming and working from home.
      </p>

    </div>

    <div className="feature-card">

      <div className="feature-icon">📶</div>

      <h3>Unlimited Data</h3>

      <p>
        Browse, stream and download
        without worrying about data limits.
      </p>

    </div>

    <div className="feature-card">

      <div className="feature-icon">🛠</div>

      <h3>Quick Installation</h3>

      <p>
        Hassle-free installation by
        our experienced technicians.
      </p>

    </div>

    <div className="feature-card">

      <div className="feature-icon">🎧</div>

      <h3>24×7 Support</h3>

      <p>
        Dedicated customer support
        whenever you need assistance.
      </p>

    </div>

  </div>

</section>
   
    <BroadbandPlans/>
    <section className="broadband-features">

  <div className="section-title">
    <span>Features</span>

    <h2>Everything You Need for a Better Internet Experience</h2>

    <p>
      Our broadband plans are designed to deliver speed,
      reliability and uninterrupted connectivity.
    </p>
  </div>

  <div className="broadband-feature-row">

    <div className="feature-box">
      <div className="feature-number">01</div>

      <h3>Unlimited Data</h3>

      <p>
        Stream, download and browse without worrying
        about data limits.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-number">02</div>

      <h3>Ultra Fast Speeds</h3>

      <p>
        Speeds up to 1 Gbps for gaming,
        streaming and work.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-number">03</div>

      <h3>Fiber Technology</h3>

      <p>
        Reliable fiber connectivity for
        consistent performance.
      </p>
    </div>

    <div className="feature-box">
      <div className="feature-number">04</div>

      <h3>24×7 Support</h3>

      <p>
        Dedicated customer support
        whenever you need help.
      </p>
    </div>

  </div>

</section>
<section className="installation-process">

  <div className="section-title">

    <span>Quick Installation</span>

    <h2>Get Connected in 3 Easy Steps</h2>

    <p>
      Getting high-speed Netplus Broadband is simple and hassle-free.
    </p>

  </div>

  <div className="steps-container">

    <div className="step-card">

      <div className="step-circle">1</div>

      <h3>Choose a Plan</h3>

      <p>
        Select the broadband plan that best suits your home or business needs.
      </p>

    </div>

    <div className="step-arrow">
      →
    </div>

    <div className="step-card">

      <div className="step-circle">2</div>

      <h3>Book Your Connection</h3>

      <p>
        Submit your request online or contact our team to schedule installation.
      </p>

    </div>

    <div className="step-arrow">
      →
    </div>

    <div className="step-card">

      <div className="step-circle">3</div>

      <h3>Enjoy High-Speed Internet</h3>

      <p>
        Our technician installs the connection and you're ready to browse.
      </p>

    </div>

  </div>

</section>
<FAQ/>
<section className="broadband-cta">

  <div className="cta-content">

    <span className="cta-tag">
      🚀 Ready to Get Started?
    </span>

    <h2>
      Experience the Future of High-Speed Internet
    </h2>

    <p>
      Join thousands of satisfied customers enjoying
      uninterrupted broadband, unlimited data and
      lightning-fast speeds.
    </p>

    <div className="cta-buttons">

      <button className="cta-primary">
        Get Connection
      </button>

      <button className="cta-secondary">
        Explore Plans
      </button>

    </div>

  </div>

</section>
    </>
  );
}

export default Broadband;
import "./PlansPage.css";
import { Link } from "react-router-dom";
import PlanCard from "../../components/Plans/PlanCard";
function PlansPage() {
  const featuredBroadband = [
    {
      id: 1,
      name: "Silver",
      speed: "100",
      price: "₹499",
    },
    {
      id: 2,
      name: "Gold Pro",
      speed: "250",
      price: "₹799",
      popular: true,
    },
    {
      id: 3,
      name: "Spark",
      speed: "1000",
      price: "₹2499",
    },
  ];

  return (
    <section className="plans-page">

      <div className="plans-hero">

        <h1>Find Your Perfect Plan</h1>

        <p>
          Whether you need high-speed broadband,
          premium IPTV, or an all-in-one combo,
          Netplus has a plan for everyone.
        </p>

        <div className="hero-buttons">

          <button>Browse Broadband</button>

          <button>Browse IPTV</button>

        </div>

      </div>

      <section className="plans-preview">

        <div className="section-title">
          <h2>Broadband Plans</h2>

          <p>
            Experience ultra-fast fibre broadband designed for streaming,
            gaming, online learning and work from home. Choose the plan
            that perfectly fits your lifestyle.
          </p>
        </div>

        <div className="plans-container">
          {featuredBroadband.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              speed={plan.speed}
              price={plan.price}
              popular={plan.popular}
            />
          ))}
        </div>

        <div className="view-all-btn">

          <Link to="/broadband">
            <button>View All Broadband Plans →</button>
          </Link>

        </div>

      </section>
      {/* IPTV Plans */}

<section className="plans-preview iptv-section">

  <div className="section-title">

    <span>NETPLUS IPTV</span>

    <h2>Entertainment Meets High-Speed Internet</h2>

    <p>
      Experience live TV, premium OTT apps, HD channels and seamless
      entertainment with Netplus IPTV. Choose a plan that fits your family.
    </p>

  </div>

  <div className="plans-container">

    <PlanCard
      name="Value Plan"
      speed="30"
      price="₹399"
    />

    <PlanCard
      name="Super Fast"
      speed="100"
      price="₹699"
      popular={true}
    />

    <PlanCard
      name="Ultimate"
      speed="300"
      price="₹1199"
    />

  </div>

  <div className="view-all-btn">
    <Link to="/iptv">
      <button>View All IPTV Plans →</button>
    </Link>
  </div>

</section>
{/* Combo Plans */}

<section className="plans-preview combo-section">

  <div className="combo-banner">
    ⭐ Save More with Combo Plans
  </div>

  <div className="section-title">

    <span>NETPLUS COMBO</span>

    <h2>Broadband + IPTV in One Plan</h2>

    <p>
      Enjoy lightning-fast fibre broadband and premium IPTV together.
      Get more entertainment, more speed, and better value with our Combo Plans.
    </p>

  </div>

  <div className="plans-container">

    <PlanCard
      name="Dual Screen"
      speed="50"
      price="₹598"
    />

    <PlanCard
      name="Dual Screen"
      speed="150"
      price="₹998"
      popular={true}
    />

    <PlanCard
      name="Dual Screen"
      speed="300"
      price="₹1498"
    />

  </div>

  <div className="view-all-btn">

    <Link to="/iptv">
      <button>View All Combo Plans →</button>
    </Link>

  </div>

</section>
{/* Why Choose Netplus */}

<section className="why-netplus">

  <div className="section-title">

    <span>WHY NETPLUS</span>

    <h2>Why Thousands of Customers Choose Netplus</h2>

    <p>
      We deliver reliable connectivity, premium entertainment, and
      outstanding customer support to keep you connected every day.
    </p>

  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">⚡</div>
      <h3>Blazing Fast Speed</h3>
      <p>Enjoy uninterrupted streaming, gaming and work with high-speed fibre broadband.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">📺</div>
      <h3>17 OTT Apps</h3>
      <p>Access your favourite OTT platforms and live TV channels in one subscription.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🛠️</div>
      <h3>24×7 Support</h3>
      <p>Our support team is always ready to help whenever you need assistance.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">📶</div>
      <h3>Unlimited Data</h3>
      <p>Browse, stream and download without worrying about data limits.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">🏠</div>
      <h3>Free Installation</h3>
      <p>Quick and hassle-free installation by our experienced technicians.</p>
    </div>

    <div className="why-card">
      <div className="why-icon">⭐</div>
      <h3>Trusted Service</h3>
      <p>Serving thousands of satisfied customers with reliable connectivity.</p>
    </div>

  </div>

</section>
    </section>
    
  );
}

export default PlansPage;
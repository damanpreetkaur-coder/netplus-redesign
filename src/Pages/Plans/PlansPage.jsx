import "./PlansPage.css";
import Plans from "../../components/Plans/Plans";

function PlansPage() {
  return (
    <div className="plans-page">

      <section className="plans-hero">

        <h1>Broadband Plans</h1>

        <p>
          Discover high-speed broadband, IPTV and combo
          plans designed for every home and business.
        </p>

      </section>

      <div className="plan-tabs">

     <button className="active">Broadband</button>

    <button>IPTV</button>

    <button>Combo</button>

    </div>
    <div className="plans-search">

  <input
    type="text"
    placeholder="🔍 Search plans by name or speed..."
  />

</div>


    <Plans />
    <section className="ai-banner">

  <div className="ai-content">

    <span className="ai-tag">✨ Smart Recommendation</span>

    <h2>
      Not Sure Which Plan <span>Fits You?</span>
    </h2>

    <p>
      Let our AI-powered recommendation system suggest the perfect
      broadband plan based on your family size, internet usage,
      streaming habits, and work requirements.
    </p>

    <button className="ai-btn">
      Get AI Recommendation →
    </button>

  </div>

  <div className="ai-image">

    <img
      src="https://illustrations.popsy.co/red/artificial-intelligence.svg"
      alt="AI Recommendation"
    />

  </div>

</section>

    </div>
  );
}

export default PlansPage;
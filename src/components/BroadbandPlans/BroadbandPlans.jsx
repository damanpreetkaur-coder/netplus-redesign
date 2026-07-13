import "./BroadbandPlans.css";
import { broadbandPlans } from "../../data/plansData";

function BroadbandPlans() {
  return (
    <section className="broadband-plans">

      <div className="section-title">

        <span>Broadband Plans</span>

        <h2>Choose Your Perfect Plan</h2>

        <p>
          Unlimited data, blazing-fast speeds and reliable
          connectivity for every home.
        </p>

      </div>

      <div className="plans-grid">

        {broadbandPlans.map((plan) => (

          <div
            key={plan.id}
            className={`plan-card ${plan.popular ? "popular" : ""}`}
          >

            {plan.popular && (
              <div className="popular-badge">
                Most Popular
              </div>
            )}

            <h3>{plan.name}</h3>

            <div className="speed">

              {plan.speed}
              <span> Mbps</span>

            </div>

            <div className="price">

              {plan.price}

              <span>/month</span>

            </div>

            <ul>

              <li>✔ Unlimited Data</li>

              <li>✔ High-Speed Fiber</li>

              <li>✔ Free Installation*</li>

              <li>✔ 24×7 Support</li>

            </ul>

            <button>
              Book Now
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default BroadbandPlans;
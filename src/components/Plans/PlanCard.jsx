import "./Plans.css";

function PlanCard({ name, speed, price, popular }) {
  return (
    <div className={`plan-card ${popular ? "popular" : ""}`}>

      {popular && (
        <div className="popular-badge">
          BEST VALUE
        </div>
      )}

      <div className="speed-circle">
        <h4>{name}</h4></div>
       <div className= "speed-value"> <span>{speed}</span>
        <span>Mbps</span>
      </div>

      <h2>
        {price}
        <span>/month</span>
      </h2>

      <div className="plan-features">
        <p>✔ Unlimited Data</p>
        <p>✔ Unlimited Calls</p>
        <p>✔ Free Installation</p>
        <p>✔ 24×7 Customer Support</p>
      </div>

      <button>Book Now</button>

    </div>
  );
}

export default PlanCard;
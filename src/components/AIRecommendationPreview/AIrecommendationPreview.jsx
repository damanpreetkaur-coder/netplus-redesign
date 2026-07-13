import "./AIRecommendationPreview.css";
import { Link } from "react-router-dom";

import aiImage from "../../assets/images/ai-illustration.png";

function AIRecommendationPreview() {
  return (
    <section className="ai-preview">

      <div className="ai-left">

        <span className="ai-badge">
          🤖 AI Powered Recommendation
        </span>

        <h2>
          Not Sure Which Plan Fits You?
        </h2>

        <p>
          Answer a few quick questions and let our AI recommend
          the perfect Broadband, IPTV or Combo plan based on
          your internet usage.
        </p>

        <div className="ai-features">

          <div>✔ Broadband Plans</div>

          <div>✔ IPTV Plans</div>

          <div>✔ Combo Plans</div>

          <div>✔ Personalized Recommendation</div>

        </div>

        <Link to="/ai-recommendation">
          <button>
            Try AI Recommendation →
          </button>
        </Link>

      </div>

      <div className="ai-right">

        <img
          src={aiImage}
          alt="AI Recommendation"
        />

      </div>

    </section>
  );
}

export default AIRecommendationPreview;
import { useState } from "react";
import "./AIRecommendation.css";

const questions = [
  {
    key: "planType",
    question: "What are you looking for today?",
    options: [
      {
        title: "Broadband",
        icon: "📶",
        description: "High-speed internet for your home or office",
      },
      {
        title: "IPTV",
        icon: "📺",
        description: "Live TV with OTT entertainment",
      },
      {
        title: "Combo",
        icon: "📦",
        description: "Broadband + IPTV in one package",
      },
    ],
  },

  {
    key: "connection",
    question: "Who is this connection for?",
    options: [
      {
        title: "Home",
        icon: "🏠",
        description: "For personal and family use",
      },
      {
        title: "Business",
        icon: "🏢",
        description: "For office and commercial use",
      },
    ],
  },

  {
    key: "users",
    question: "How many people will use the internet?",
    options: [
      {
        title: "1-2 Users",
        icon: "👤",
      },
      {
        title: "3-5 Users",
        icon: "👨‍👩‍👧",
      },
      {
        title: "5+ Users",
        icon: "👨‍👩‍👧‍👦",
      },
    ],
  },

  {
    key: "usage",
    question: "What's your primary usage?",
    options: [
      {
        title: "Gaming",
        icon: "🎮",
      },
      {
        title: "Streaming",
        icon: "🎬",
      },
      {
        title: "Work From Home",
        icon: "💼",
      },
      {
        title: "Online Classes",
        icon: "📚",
      },
      {
        title: "Mixed Usage",
        icon: "🌐",
      },
    ],
  },
];

function AIRecommendation() {
  const [currentStep, setCurrentStep] = useState(0);

  const [answers, setAnswers] = useState({
    planType: "",
    connection: "",
    users: "",
    usage: "",
  });

  const [recommendation, setRecommendation] = useState(null);

  const currentQuestion = questions[currentStep];

  const progress = ((currentStep + 1) / questions.length) * 100;

  const getRecommendation = () => {
    const { planType, users, usage } = answers;

    // Broadband Plans
    if (planType === "Broadband") {
      if (usage === "Gaming" && users === "5+ Users") {
        return {
          name: "Spark",
          speed: "1000 Mbps",
          price: "₹2499",
          reason:
            "Ultimate speed for gaming, streaming and multiple users.",
        };
      }

      if (
        usage === "Streaming" ||
        users === "3-5 Users"
      ) {
        return {
          name: "Gold Pro",
          speed: "250 Mbps",
          price: "₹799",
          reason:
            "Perfect balance for families and streaming.",
        };
      }

      return {
        name: "Silver",
        speed: "100 Mbps",
        price: "₹499",
        reason:
          "Ideal for everyday browsing and online classes.",
      };
    }

    // IPTV Plans
    if (planType === "IPTV") {
      return {
        name: "Ultra IPTV",
        speed: "150 Mbps",
        price: "₹799",
        reason:
          "17 OTT Apps and HD Live TV included.",
      };
    }

    // Combo Plans
    return {
      name: "Dual Screen Combo",
      speed: "300 Mbps",
      price: "₹1498",
      reason:
        "Broadband + IPTV with 17 OTT Apps.",
    };
  };

  const handleSelect = (option) => {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.key]: option,
    };

    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 250);
    } else {
      setTimeout(() => {
        setRecommendation(getRecommendation(updatedAnswers));
      }, 400);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="ai-page">
      <div className="ai-container">

        <div className="ai-header">
          <span className="ai-tag">
            🤖 AI Powered Recommendation
          </span>

          <h1>Find Your Perfect Netplus Plan</h1>

          <p>
            Answer a few simple questions and our AI
            will recommend the perfect plan for you.
          </p>
        </div>

        {recommendation ? (
          <div className="recommendation-card">

            <h2>🎉 Perfect Match Found!</h2>

            <h3>{recommendation.name}</h3>

            <h1>{recommendation.speed}</h1>

            <h2>{recommendation.price}/month</h2>

            <p>{recommendation.reason}</p>

            <div className="result-buttons">
              <button>View Plan</button>
              <button className="secondary-btn">
                Get Connection
              </button>
            </div>

          </div>
        ) : (
          <>
            <div className="progress-section">

              <div className="progress-text">
                Step {currentStep + 1} of {questions.length}
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

            </div>

            <div className="question-card">

              <h2>{currentQuestion.question}</h2>

              <div className="options-grid">

                {currentQuestion.options.map((option) => (
                  <div
                    key={option.title}
                    className="option-card"
                    onClick={() =>
                      handleSelect(option.title)
                    }
                  >
                    <div className="option-icon">
                      {option.icon}
                    </div>

                    <h3>{option.title}</h3>

                    {option.description && (
                      <p>{option.description}</p>
                    )}
                  </div>
                ))}

              </div>

              {currentStep > 0 && (
                <button
                  className="back-btn"
                  onClick={handlePrevious}
                >
                  ← Previous
                </button>
              )}

            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default AIRecommendation;
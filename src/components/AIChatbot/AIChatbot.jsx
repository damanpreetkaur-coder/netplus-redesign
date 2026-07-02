import { useState } from "react";
import "./AIChatbot.css";

function AIChatbot() {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState({
    usage: "",
    devices: "",
    entertainment: "",
  });

  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      question: "What do you use the internet for?",
      options: [
        "Gaming",
        "Streaming",
        "Work From Home",
        "Basic Browsing",
      ],
      key: "usage",
    },
    {
      question: "How many devices are connected?",
      options: ["1-2 Devices", "3-5 Devices", "5+ Devices"],
      key: "devices",
    },
    {
      question: "Do you watch Live TV or OTT?",
      options: ["Live TV", "OTT", "Both", "No"],
      key: "entertainment",
    },
  ];

  const currentQuestion = questions[step - 1];

  const handleOptionClick = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion.key]: option,
    });
  };

  const getRecommendation = () => {
    const { usage, devices, entertainment } = answers;

    if (usage === "Gaming" && devices === "5+ Devices") {
      return {
        name: "Spark",
        speed: "1000 Mbps",
        price: "₹2499",
        reason: "Perfect for gamers and heavy internet users.",
      };
    }

    if (usage === "Streaming" && entertainment === "Both") {
      return {
        name: "Gold Pro",
        speed: "250 Mbps",
        price: "₹799",
        reason: "Ideal for streaming, OTT and Live TV.",
      };
    }

    if (usage === "Work From Home") {
      return {
        name: "Diamond",
        speed: "400 Mbps",
        price: "₹999",
        reason: "Stable connection for work and video meetings.",
      };
    }

    return {
      name: "Silver",
      speed: "100 Mbps",
      price: "₹499",
      reason: "Best for everyday browsing and small families.",
    };
  };

  return (
    <section className="ai-chatbot">
      <div className="chatbot-header">
        <h2>AI Broadband Advisor</h2>
        <p>
          Answer just 3 simple questions and we'll recommend the perfect plan
          for you.
        </p>
      </div>

      {recommendation ? (
        <div className="recommendation-card">
          <h2>🎉 Perfect Plan Found!</h2>

          <h3>{recommendation.name}</h3>

          <h1>{recommendation.speed}</h1>

          <h2>{recommendation.price}/month</h2>

          <p>{recommendation.reason}</p>

          <button>Book Now</button>
        </div>
      ) : (
        <div className="chatbot-card">
          <div className="progress">Step {step} of 3</div>

          <h3>{currentQuestion.question}</h3>

          <div className="options">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={
                  answers[currentQuestion.key] === option ? "selected" : ""
                }
              >
                {option}
              </button>
            ))}
          </div>

          <button
            className="next-btn"
            disabled={!answers[currentQuestion.key]}
            onClick={() => {
              if (step < questions.length) {
                setStep(step + 1);
              } else {
                setRecommendation(getRecommendation());
              }
            }}
          >
            {step === questions.length ? "Get Recommendation" : "Next"}
          </button>
        </div>
      )}
    </section>
  );
}

export default AIChatbot;
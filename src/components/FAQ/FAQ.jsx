import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is the installation time for a new broadband connection?",
    answer:
      "Most new broadband connections are installed within 24–48 hours after confirmation.",
  },
  {
    question: "Do all broadband plans include unlimited data?",
    answer:
      "Yes, all Netplus broadband plans come with unlimited data for uninterrupted browsing.",
  },
  {
    question: "Can I upgrade my broadband plan later?",
    answer:
      "Absolutely! You can upgrade your plan anytime by contacting customer support.",
  },
  {
    question: "Is Wi-Fi router included?",
    answer:
      "A compatible Wi-Fi router can be provided during installation depending on your selected plan.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="section-title">
        <span>FAQs</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about Netplus Broadband.
        </p>
      </div>

      <div className="faq-container">

        {faqData.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;
import "./HowItWorks.css";
import { FaWifi, FaClipboardCheck, FaTools } from "react-icons/fa";

function HowItWorks() {

  const steps = [
    {
      id: 1,
      icon: <FaWifi />,
      title: "Choose a Plan",
      description:
        "Select the broadband plan that best suits your home or business needs.",
    },
    {
      id: 2,
      icon: <FaClipboardCheck />,
      title: "Book Online",
      description:
        "Submit your details and schedule a new connection in just a few clicks.",
    },
    {
      id: 3,
      icon: <FaTools />,
      title: "Get Connected",
      description:
        "Our engineer installs your connection and gets you online within 24 hours.",
    },
  ];

  return (
    <section className="how-it-works">

      <div className="section-title">
        <h2>Get Connected in <span>3 Easy Steps</span></h2>
        <p>
          Fast, simple and hassle-free broadband installation.
        </p>
      </div>

      <div className="steps-container">

        {steps.map((step) => (
          <div className="step-card" key={step.id}>

            <div className="step-number">
              {step.id}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;
import "./WhyChoose.css";

import feature1 from "../../assets/images/speed.jpeg";
import feature2 from "../../assets/images/reliable.jpg";
import feature3 from "../../assets/images/entertainment.png";
import feature4 from "../../assets/images/affordable.png";
import feature5 from "../../assets/images/avalaible.png";
function WhyChoose() {

  const features = [
    {
      id:1,
      image:feature1,
      title:"High-Speed Internet",
      description:"Explore at lightning-fast speed with reliable broadband designed for streaming, gaming and everyday work."
    },

    {
      id:2,
      image:feature2,
      title:"Reliability",
      description:"Trusted by thousands of users across Punjab with stable connectivity and minimum downtime."
    },

    {
      id:3,
      image:feature3,
      title:"Entertainment Packages",
      description:"Get exciting combo deals including Broadband, IPTV, OTT Apps and Calling in one affordable plan."
    },

    {
      id:4,
      image:feature4,
      title:"Affordable Pricing",
      description:"Entertainment becomes twice the fun when you enjoy premium services without spending more."
    },

    {
      id:5,
      image:feature5,
      title:"24×7 Customer Support",
      description:"Our support team is always available to help you with installation, technical issues and account queries."
    }
  ];

  return (

    <section className="whychoose">

      <div className="section-title">

        <h2>Why Choose <span>Netplus?</span></h2>

        <p>
          Everything you need for a seamless digital experience.
        </p>

      </div>

      <div className="why-container">

        {features.map((feature,index)=>(

          <div
            className={`feature-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={feature.id}
          >

            <div className="feature-image">

              <img
                src={feature.image}
                alt={feature.title}
              />

            </div>

            <div className="feature-content">

              <span className="feature-number">
                {feature.id}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default WhyChoose;
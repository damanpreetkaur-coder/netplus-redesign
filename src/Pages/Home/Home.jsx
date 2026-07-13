import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Plans from "../../components/Plans/Plans";
import AIRecommendationPreview from "../../components/AIRecommendationPreview/AIRecommendationPreview";
import CTA from "../../components/CTA/CTA";
import Comparison from "../../components/Comparison/Comparison";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Footer from "../../components/Footer/Footer";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <AIRecommendationPreview />
      <HowItWorks />
      <CTA />
      <Comparison />
      <WhyChoose />
      <Footer />
    </>
  );
}

export default Home;
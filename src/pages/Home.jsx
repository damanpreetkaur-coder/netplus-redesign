import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Plans from "../components/Plans/Plans";
import AIChatbot from "../components/AIChatbot/AIChatbot";
import Comparison from "../components/Comparison/Comparison";
import WhyChoose from "../components/WhyChoose/WhyChoose";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <AIChatbot />
      <Comparison />
      <WhyChoose />
    </>
  );
}

export default Home;
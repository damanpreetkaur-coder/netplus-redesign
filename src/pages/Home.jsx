import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Plans from "../components/Plans/Plans";
import AIChatbot from "../components/AIChatbot/AIChatbot";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <AIChatbot />
    </>
  );
}

export default Home;
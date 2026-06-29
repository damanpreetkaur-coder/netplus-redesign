import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Plans from "../components/Plans/Plans";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
    </>
  );
}

export default Home;
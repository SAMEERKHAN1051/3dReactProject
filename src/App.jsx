import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import { CardSection } from "./components/CardSection";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { HeroParallaxSection } from "./components/ParallaxSection";
import {HeroScrollDemo} from "./components/ScrollEffect"
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { GlobeComponent } from "./components/animated-components/Globe";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <HeroScrollDemo />
        <Collaboration />
        <CardSection />
        <HeroParallaxSection />
        <Services />
        <Pricing />
        <Roadmap />
        <GlobeComponent />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

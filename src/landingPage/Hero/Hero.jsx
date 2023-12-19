// import HeroCard from "./HeroCard";
import Navbar from "../Navbar";
import HeroCardSection from "./HeroCardSection";
import HeroFooter from "./HeroFooter";
import HeroSection from "./HeroSection";
// import i18next from "./i18n";

// i18next.t("my.key");
const Hero = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <HeroCardSection />
      <HeroFooter />
    </div>
  );
};

export default Hero;

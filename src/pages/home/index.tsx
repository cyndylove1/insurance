import Hero from "../../components/hero";
import AboutUs from "../../components/ui/about";
import CTA from "../../components/ui/cta";
import HowItWorks from "../../components/ui/HowItWorks";
import Services from "../../components/ui/services";
import WhyUs from "../../components/ui/whyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyUs />
      <Services />
      <HowItWorks />
      <CTA />
    </>
  );
}
